"use client";

import * as d3 from "d3";
import { transform } from "next/dist/build/swc";
import { useEffect, useRef } from "react";

interface ResponsiveGraphProps {
  graphData: Board[];
  fromTime: number;
  toTime: number;
}

export default function ResponsiveGraph({
  graphData,
  fromTime,
  toTime,
}: ResponsiveGraphProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Map data into [date]: [completedCount, inProgressCount];
  const dataMap = graphData
    .map((b) => {
      const completed = b.completedAt != undefined;
      // Convert completedAt/updatedAt to time at start of day
      const date = new Date(completed ? b.completedAt! : b.updatedAt)
        .toISOString()
        .slice(0, 10);
      const time = new Date(date).getTime();

      return { time, completed };
    })
    .reduce((map, d) => {
      if (map.has(d.time)) {
        const data = map.get(d.time);
        data![d.completed ? 0 : 1] += 1;
      } else {
        const data: [number, number] = [0, 0];
        data[d.completed ? 0 : 1] += 1;
        map.set(d.time, data);
      }

      return map;
    }, new Map<number, [number, number]>());

  // Format data into {time, data:[completedCount, inProgressCount]}[]
  const formattedData = Array.from(dataMap, ([time, data]) => ({
    time,
    data,
  }));

  console.log(formattedData);

  // Get max y axis height
  const maxY = formattedData.reduce((max, d) => {
    console.log(d);
    if (d.data[0] > max) return d.data[0];
    if (d.data[1] > max) return d.data[1];
    return max;
  }, 1);

  // Get graph virtual width and height
  const margin = { left: 21, top: 5, bottom: 5 };
  const width = 400 - margin.left;
  const height = 200 - margin.top - margin.bottom;

  // Get number of days between start and end times
  const days = Math.round(
    new Date(toTime + 86_400_000 - fromTime).getTime() / 86_400_000
  );

  // Get width of bands
  const bandWidth = width / days / 2;

  console.log(bandWidth);

  useEffect(() => {
    // Clear graph
    ref.current!.innerHTML = "";

    // append the svg object to the body of the page
    var svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", "100%")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left} ${height + margin.top + margin.bottom}`
      )
      // .style("border", "1px solid black")
      .append("g");

    // X axis
    var x = d3
      .scaleLinear()
      .domain([fromTime, toTime + 86_400_000])
      .range([0, width]);

    // Y axis
    var y = d3.scaleLinear().domain([0, maxY]).range([height, 0]);

    // Completed Bars
    svg
      .selectAll("completed")
      .data(formattedData)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.time) + margin.left;
      })
      .attr("y", function (d) {
        return y(d.data[0]) + margin.top;
      })
      .attr("width", bandWidth)
      .attr("height", function (d) {
        return height - y(d.data[0]);
      })
      .attr("fill", "#69b3a2");

    // Inprogress Bars
    svg
      .selectAll("inProgress")
      .data(formattedData)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(d.time) + margin.left + bandWidth;
      })
      .attr("y", function (d) {
        return y(d.data[1]) + margin.top;
      })
      .attr("width", bandWidth)
      .attr("height", function (d) {
        return height - y(d.data[1]);
      })
      .attr("fill", "#333");

    // X axis line
    svg
      .append("g")
      .call(d3.axisBottom(x).ticks(0))
      .attr("transform", `translate(${margin.left}, ${height + margin.top})`);

    // Y axis line
    svg
      .append("g")
      .call(d3.axisLeft(y).ticks(maxY))
      .attr("transform", `translate(${margin.left},${margin.top})`);
  }, [graphData, fromTime, toTime]);

  return <div ref={ref}></div>;
}
