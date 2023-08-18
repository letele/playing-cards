import * as React from "react";
const SvgJ2 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="J-2_svg__card"
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
        id="J-2_svg__b"
        preserveAspectRatio="none"
        viewBox="0 0 1300 2000"
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          fill="none"
          d="M317.057 1294.416 100 1620l220-60 40 240 140-200 160 200 40-200 180 180 60-220 260 60-236.68-304.303M1241.2 534.59a75 75 0 0 1-75 75 75 75 0 0 1-75-75 75 75 0 0 1 75-75 75 75 0 0 1 75 75zM980.115 234.097a75 75 0 0 1-75 75 75 75 0 0 1-75-75 75 75 0 0 1 75-75 75 75 0 0 1 75 75zM190.295 431.14a75 75 0 0 1-75 75 75 75 0 0 1-75-75 75 75 0 0 1 75-75 75 75 0 0 1 75 75zm734.05 219.13c42.402-50.453 91.594-93.353 167.507-106.539a74.998 74.998 0 0 1-.653-9.142 75.002 75.002 0 0 1 14.617-44.346C1026.352 437.474 931.121 446.832 840 440c-78.02-51.924-35.898-101.821 13.518-151.596a75 75 0 0 1-21.803-39.297C687.944 262.66 542.48 256.337 420 520c-50.92-188.617-141.385-149.387-232.229-107.986a75 75 0 0 1 2.524 19.127 75 75 0 0 1-16.783 47.193c66.827 55.255 117.568 127.83 155.77 213.91M384.888 1140c51.89 98.343 153.918 159.919 265.111 160 111.198-.076 213.233-61.653 265.125-160M1095 1000a445 445 0 0 1-445 445 445 445 0 0 1-445-445 445 445 0 0 1 445-445 445 445 0 0 1 445 445Z"
        />
      </symbol>
      <symbol
        id="J-2_svg__a"
        preserveAspectRatio="none"
        viewBox="0 0 1300 2000"
      >
        <path d="M879.655 937.603a40 40 0 0 1-40 40 40 40 0 0 1-40-40 40 40 0 0 1 40-40 40 40 0 0 1 40 40zm-379.31 0a40 40 0 0 1-40 40 40 40 0 0 1-40-40 40 40 0 0 1 40-40 40 40 0 0 1 40 40z" />
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
    <use
      width={202.8}
      height={312}
      x={-101.4}
      y={-156}
      xlinkHref="#J-2_svg__a"
    />
    <use
      width={202.8}
      height={312}
      x={-101.4}
      y={-156}
      xlinkHref="#J-2_svg__b"
    />
  </svg>
);
export default SvgJ2;
