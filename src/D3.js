import * as React from "react";
const SvgD3 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="D-3_svg__card"
    height={336}
    preserveAspectRatio="none"
    viewBox="-120 -168 240 336"
    width={240}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <symbol
        id="D-3_svg__b"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0-450 0-500 0-450 350 0 400 0 350 0 0 450 0 500 0 450-350 0-400 0Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="D-3_svg__a"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-250-320v-140h450L-110-80c10-10 60-40 110-40 200 0 250 120 250 270 0 200-80 310-280 310s-230-160-230-160"
          stroke="red"
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </symbol>
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
    <use xlinkHref="#D-3_svg__a" height={32} width={32} x={-114.4} y={-156} />
    <use
      xlinkHref="#D-3_svg__b"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <use xlinkHref="#D-3_svg__b" height={70} width={70} x={-35} y={-135.501} />
    <use xlinkHref="#D-3_svg__b" height={70} width={70} x={-35} y={-35} />
    <g transform="rotate(180)">
      <use xlinkHref="#D-3_svg__a" height={32} width={32} x={-114.4} y={-156} />
      <use
        xlinkHref="#D-3_svg__b"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <use
        xlinkHref="#D-3_svg__b"
        height={70}
        width={70}
        x={-35}
        y={-135.501}
      />
    </g>
  </svg>
);
export default SvgD3;
