import * as React from "react";
const SvgC9 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="C-9_svg__card"
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
        id="C-9_svg__b"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path d="M30 150c5 235 55 250 100 350h-260c45-100 95-115 100-350a10 10 0 0 0-20 0 210 210 0 1 1-74-201 10 10 0 0 0 14-14 230 230 0 1 1 220 0 10 10 0 0 0 14 14 210 210 0 1 1-74 201 10 10 0 0 0-20 0Z" />
      </symbol>
      <symbol
        id="C-9_svg__a"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M250-100a250 250 0 0 1-500 0v-110a250 250 0 0 1 500 0v420A250 250 0 0 1 0 460c-150 0-180-60-200-85"
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
    <use xlinkHref="#C-9_svg__a" height={32} width={32} x={-114.4} y={-156} />
    <use
      xlinkHref="#C-9_svg__b"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <use
      xlinkHref="#C-9_svg__b"
      height={70}
      width={70}
      x={-87.501}
      y={-135.588}
    />
    <use
      xlinkHref="#C-9_svg__b"
      height={70}
      width={70}
      x={17.501}
      y={-135.588}
    />
    <use
      xlinkHref="#C-9_svg__b"
      height={70}
      width={70}
      x={-87.501}
      y={-68.529}
    />
    <use
      xlinkHref="#C-9_svg__b"
      height={70}
      width={70}
      x={17.501}
      y={-68.529}
    />
    <use xlinkHref="#C-9_svg__b" height={70} width={70} x={-35} y={-42} />
    <g transform="rotate(180)">
      <use xlinkHref="#C-9_svg__a" height={32} width={32} x={-114.4} y={-156} />
      <use
        xlinkHref="#C-9_svg__b"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <use
        xlinkHref="#C-9_svg__b"
        height={70}
        width={70}
        x={-87.501}
        y={-135.588}
      />
      <use
        xlinkHref="#C-9_svg__b"
        height={70}
        width={70}
        x={17.501}
        y={-135.588}
      />
      <use
        xlinkHref="#C-9_svg__b"
        height={70}
        width={70}
        x={-87.501}
        y={-68.529}
      />
      <use
        xlinkHref="#C-9_svg__b"
        height={70}
        width={70}
        x={17.501}
        y={-68.529}
      />
    </g>
  </svg>
);
export default SvgC9;
