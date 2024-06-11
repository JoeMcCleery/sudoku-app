interface ScalableTextProps {
  text: string;
}

export default function ScaleableText({ text }: ScalableTextProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <text
        x="50%"
        y="60%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-size="190%"
        fill="black"
      >
        {text}
      </text>
    </svg>
  );
}
