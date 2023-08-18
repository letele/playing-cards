import * as React from "react";
const SvgS2 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="S-2_svg__card"
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
        id="S-2_svg__b"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path d="M0-500c100 250 355 400 355 685a150 150 0 0 1-300 0 10 10 0 0 0-20 0c0 200 50 215 95 315h-260c45-100 95-115 95-315a10 10 0 0 0-20 0 150 150 0 0 1-300 0c0-285 255-435 355-685Z" />
      </symbol>
      <symbol
        id="S-2_svg__a"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-225-225c-20-40 25-235 225-235s225 135 225 235c0 200-450 385-450 685h450V300"
          stroke="#000"
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
    <use xlinkHref="#S-2_svg__a" height={32} width={32} x={-114.4} y={-156} />
    <use
      xlinkHref="#S-2_svg__b"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <use xlinkHref="#S-2_svg__b" height={70} width={70} x={-35} y={-135.501} />
    <g transform="rotate(180)">
      <use xlinkHref="#S-2_svg__a" height={32} width={32} x={-114.4} y={-156} />
      <use
        xlinkHref="#S-2_svg__b"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <use
        xlinkHref="#S-2_svg__b"
        height={70}
        width={70}
        x={-35}
        y={-135.501}
      />
    </g>
  </svg>
);
export default SvgS2;
