import * as React from "react";
const SvgB2 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="B-2_svg__card"
    height={336}
    preserveAspectRatio="none"
    viewBox="-120 -168 240 336"
    width={240}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <pattern
        id="B-2_svg__a"
        width={6}
        height={6}
        patternUnits="userSpaceOnUse"
      >
        <path d="m3 0 3 3-3 3-3-3Z" fill="red" />
      </pattern>
    </defs>
    <rect
      width={239}
      height={335}
      x={-119.5}
      y={-167.5}
      rx={12}
      ry={12}
      fill="#fff"
      stroke="#000"
    />
    <rect
      fill="url(#B-2_svg__a)"
      width={216}
      height={312}
      x={-108}
      y={-156}
      rx={12}
      ry={12}
    />
  </svg>
);
export default SvgB2;
