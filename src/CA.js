import * as React from "react";
const SvgCA = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="C-A_svg__card"
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
        id="C-A_svg__b"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
          stroke="#000"
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </symbol>
      <symbol
        id="C-A_svg__a"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path d="M30 150c5 235 55 250 100 350h-260c45-100 95-115 100-350a10 10 0 0 0-20 0 210 210 0 1 1-74-201 10 10 0 0 0 14-14 230 230 0 1 1 220 0 10 10 0 0 0 14 14 210 210 0 1 1-74 201 10 10 0 0 0-20 0Z" />
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
    <use xlinkHref="#C-A_svg__a" height={70} width={70} x={-35} y={-35} />
    <use xlinkHref="#C-A_svg__b" height={32} width={32} x={-114.4} y={-156} />
    <use
      xlinkHref="#C-A_svg__a"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <g transform="rotate(180)">
      <use xlinkHref="#C-A_svg__b" height={32} width={32} x={-114.4} y={-156} />
      <use
        xlinkHref="#C-A_svg__a"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
    </g>
  </svg>
);
export default SvgCA;
