interface ScalableTextProps {
  text: string;
  className: string;
}

export default function ScaleableText({ text, className }: ScalableTextProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <text
        x="50%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="190%"
      >
        {text}
      </text>
    </svg>
  );
}
