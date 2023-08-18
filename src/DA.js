import * as React from "react";
const SvgDA = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="D-A_svg__card"
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
        id="D-A_svg__b"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
          stroke="red"
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </symbol>
      <symbol
        id="D-A_svg__a"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0-450 0-500 0-450 350 0 400 0 350 0 0 450 0 500 0 450-350 0-400 0Z"
          fill="red"
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
    <use xlinkHref="#D-A_svg__a" height={70} width={70} x={-35} y={-35} />
    <use xlinkHref="#D-A_svg__b" height={32} width={32} x={-114.4} y={-156} />
    <use
      xlinkHref="#D-A_svg__a"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <g transform="rotate(180)">
      <use xlinkHref="#D-A_svg__b" height={32} width={32} x={-114.4} y={-156} />
      <use
        xlinkHref="#D-A_svg__a"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
    </g>
  </svg>
);
export default SvgDA;
