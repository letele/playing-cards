import * as React from "react";
const SvgDK = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="D-K_svg__card"
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
        id="D-K_svg__h"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-285-460h200m-100 0v920m-100 0h200M85-460h200m-100 20-355 595M85 460h200m-100-20L-10-70"
          stroke="red"
          strokeWidth={80}
          strokeLinecap="square"
          strokeMiterlimit={1.5}
          fill="none"
        />
      </symbol>
      <symbol
        id="D-K_svg__a"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0-450 0-500 0-450 350 0 400 0 350 0 0 450 0 500 0 450-350 0-400 0Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="D-K_svg__g"
        preserveAspectRatio="none"
        viewBox="0 0 1300 2000"
      >
        <path
          stroke="#44F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          fill="none"
          d="M545 265c2.64-9.53 17.644-23.57 27.903-22.032C591.207 245.713 610 280 620 280m10 10c-10 0-20 10-20 10m-26.992-28.159a35.29 35.29 0 0 1 .54 6.192c0 13.808-7.834 25-17.5 25-9.664 0-17.5-11.192-17.5-25 0-4.428.807-8.588 2.22-12.195M120.803 496.815c-3.725 13.385-7.12 15.266-16.172 17.234m-8.167-5.558c-3.725 13.385-11.329 13.38-20.382 15.348m4.126 6.104c-3.725 13.384-7.7 14.104-18.204 13.75m7.587 14.588c-5.031 10.627-11.038 10.476-19.655 9.542m132.017-50.58C188.18 532.902 210 535 210 535M65 590c4.797.895 7.937-1.11 10-5m33.204-33.974c4.797.895 7.937-2.906 10-6.796M65 590c4.797.895 7.937-1.11 10-5m61.026-52.31c4.797.896 6.654-2.649 8.717-6.539m-61.057 40.663c4.797.895 7.937-2.65 10-6.539"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={120}
          width={120}
          transform="matrix(1 0 0 .972 590 941.68)"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={120}
          width={120}
          transform="matrix(1 0 0 .972 510 941.68)"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={170}
          width={170}
          transform="scale(1 .972) rotate(-15 2420.34 -824.613)"
          stroke="#44F"
          strokeWidth={42.352}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={150}
          width={150}
          transform="scale(1 .972) rotate(-10 4324.31 -1626.39)"
          stroke="#44F"
          strokeWidth={48}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={130}
          width={130}
          transform="matrix(.9962 -.08472 .08716 .9683 382.582 827.567)"
          stroke="#44F"
          strokeWidth={55.384}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={110}
          width={110}
          transform="matrix(1 0 0 .972 405 928.54)"
          stroke="#44F"
          strokeWidth={65.454}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={100}
          width={100}
          transform="scale(1 .972) rotate(10 -5755.481 2861.422)"
          stroke="#44F"
          strokeWidth={72}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={90}
          width={90}
          transform="scale(1 .972) rotate(60 -200.001 1588.258)"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={90}
          width={90}
          transform="scale(1 .972) rotate(50 -503.253 1773.154)"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={90}
          width={90}
          transform="matrix(.76604 .62479 -.64279 .7446 1088.453 1058.378)"
        />
        <use
          xlinkHref="#D-K_svg__a"
          height={90}
          width={90}
          transform="scale(1 .972) rotate(30 -1695.542 2497.377)"
        />
      </symbol>
      <symbol
        id="D-K_svg__f"
        preserveAspectRatio="none"
        viewBox="0 0 1300 2000"
      >
        <path
          stroke="#44F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6}
          fill="none"
          d="M1205 261.182v97.636m-15-106.69v115.743m-15-17.56v29.996m0-89.9v39.187m0-89.9v29.995m-15 98.684v27.984m0-98.002v23.29m0-98.002v27.984m-15 54.246v8.254M520.134 778.543C616.396 754.406 684.392 730.935 767.926 660H910.32c-156.787 297.276-107.906 528.857-68.796 765.254M525.766 808.059C620.59 784.352 694.855 758.784 778.836 690h83.006c-131.846 281.901-89.778 512.978-51.069 736.045m178.593 6.9C889.254 1168.2 806.638 966.91 1000.051 642.941L1031.658 590H741.766l-9.922 8.756c-78.35 69.132-127.849 86.374-220.131 109.724m505.384 712.843c-89.076-265.304-178.628-449.206 8.714-763.003l58.697-98.32H730.424l-18.43 16.26c-74.36 65.612-115.842 79.924-204.671 102.393M426.291.007C462.762 61.82 494.762 122.796 510 190c220-50 290 135 490 75-6.148-107.703 56.123-197.855 111.966-265.018M614.76.032c16.728 41.378 55.947 49.645 55.58 90.028-.407 44.997-60.978 44.224-60.334-.77.435-30.41 34.906-29.556 34.477.44-.215 14.998-21.763 14.723-21.548-.275M599.096.045c-17.95 40.75-57.256 48.056-58.045 88.365-.88 44.99 59.69 45.764 60.335.77.435-30.41-34.048-30.436-34.477-.44-.215 14.998 21.333 15.273 21.548.275M910 3.41c-3.958 75.052 63.504 83.571 57.94 133.176-5.014 44.7-73.043 36.172-67.764-8.495 3.568-30.188 42.242-24.923 38.722 4.855-1.76 14.889-25.96 11.855-24.201-3.034M910 3.41c-13.639 73.838-81.115 65.441-87.268 114.973-5.544 44.633 62.484 53.162 67.764 8.495 3.568-30.189-35.203-34.632-38.723-4.854-1.76 14.889 22.442 17.923 24.202 3.034m-384.09 3.746C710 100 880 200 1015.602 156.594m-20.192 5.329c6.997-12.153 11.843-26.264 14.589-41.923 8.271-.945 15.987-2.113 23.204-3.475m-81.716 50.85c19.219-13.49 30.892-37.154 31.903-75.196 30.425-1.549 52.5-5.644 69.805-11.195M466.52 71.255c9.446 5.242 19.354 9.28 29.914 11.366 3.985 11.503 8.452 24.997 17.213 39.74a89.052 89.052 0 0 0 2.41 3.83m36.572-2.298c-21.41-18.821-24.133-45.134-35.9-69.788-25.03 2.192-54.55-18.946-83.545-45.79m265.621 125.38c9.724-12.91 17.517-28.177 22.597-45.675 10.847-3.769 20.57-9.546 28.66-16.604 6.148 8.853 14.188 16.87 23.8 23.22.785 19.911 5.349 38.047 12.742 53.992M757.092.052c-9.98 32.89-23.918 60.709-60.003 62.635-4.63 30.514-16.392 51.693-33.044 66.459m160.493 26.228c-15.846-19.385-24.21-44.73-21.011-79.265-34.67-10.875-41.411-41.52-43.146-76.066M.128 733.28c160.744-106.142 273.819-156.129 405.764-201.715M1084.508 560c58.555 0 155.048 48.393 215.606 93.996m-239.316-5.459c113.096 71.77 182.617 159.57 221.424 276.264m-236.754-250.5c108.824 68.98 172.626 150.487 209.091 262.348m45.512-50.46c-42.856-108.747-115.328-194.418-223.9-263.39m-77.436 140.1c94.584 60.403 136.897 120.762 165.899 221.532M988.568 785.964c89.063 57.044 124.763 109.898 152.397 206.618l1.79 6.27m-168.832-175.03c78.204 50.362 103.128 90.663 128.58 179.748l5.99 20.963m-63.124 257.059 3.338-9.824c51.421-130.622 135.35-196.342 251.25-246.26m-145.866 202.44c35.812-56.211 81.927-90.804 145.814-120.772m-186.526 142.254c42.765-84.642 101.834-131.066 186.517-169.544m-222.025 186.694c47.687-111.379 119.453-168.574 222.006-213.895m-329.049 147.317c70.84-149.538 191.118-228.61 329.13-282.407M981.74 1237.19c64.317-157.148 179.434-237.316 318.253-292.746m-297.716 355.7c108.097-44.364 209.475-97.716 297.742-168.601m-329.817 66.854c-13.49-48.25-23.45-95.134-27.496-142.517-9.688-113.478 12.898-231.197 104.568-384.744l58.698-98.32 7.089-9.683m-73.17 847.474c-19.667-59.873-42.017-121.3-58.398-173.96M523.076 810h291.799M527.684 915h260.644m-261.066 25h256.695m329.144 260.255 20.73 13.446m8.632-52.236 18.51 16.033m7.855-42.927 16.461 17.845m18.908-46.52 14.1 19.81m17.716-40.438 12.336 21.065m30.262-43.735 10.579 22.262m-193.827 145.638 21.824 11.578M1220 603.866V160l80-80m-40 546.748v-450.18l40-39.998m-80.018 216.094C1178.5 366.005 1146.587 405.675 1120 460c-1.436-40.363-8.306-82.087 20-115-16.063-8.51-30.68-9.463-50-35 19.32-25.537 33.937-26.49 50-35-28.306-32.913-21.436-74.637-20-115 26.587 54.325 58.5 93.995 99.982 107.336M1148.3 411.435c.056-3.197.194-6.275.441-9.224 1.32-15.756 4.72-26.855 14.004-37.65l24.494-28.483-33.195-17.588c-8.638-4.576-14.026-6.53-18.703-8.49 4.677-1.96 10.065-3.914 18.703-8.49l33.195-17.588-24.494-28.483c-9.284-10.795-12.684-21.894-14.004-37.65a140.39 140.39 0 0 1-.441-9.224M1120 160c-80.254 116.73-51.745 210.787 0 300M708.559 618.376A42 42 0 0 1 730 655v0a42 42 0 0 1-42 42 42 42 0 0 1-41.598-36.205m39.626-25.195a19.5 19.5 0 0 1 1.972-.1 19.5 19.5 0 0 1 19.5 19.5 19.5 19.5 0 0 1-19.5 19.5 19.5 19.5 0 0 1-19.5-19.5 19.5 19.5 0 0 1 2.09-8.784m126.639-56.22A42 42 0 0 1 800 605a42 42 0 0 1-42 42 42 42 0 0 1-41.436-35.143m53.89-21.862A19.5 19.5 0 0 1 777.5 605a19.5 19.5 0 0 1-19.5 19.5 19.5 19.5 0 0 1-19.5-19.5 19.5 19.5 0 0 1 7.055-15.012m138.235.002A42 42 0 0 1 885 600a42 42 0 0 1-42 42 42 42 0 0 1-42-42 42 42 0 0 1 1.21-10.012m57.524 0A19.5 19.5 0 0 1 862.5 600a19.5 19.5 0 0 1-19.5 19.5 19.5 19.5 0 0 1-19.5-19.5 19.5 19.5 0 0 1 2.767-10.012m145.023.002A42 42 0 0 1 972.5 600a42 42 0 0 1-42 42 42 42 0 0 1-42-42 42 42 0 0 1 1.21-10.012m57.524 0A19.5 19.5 0 0 1 950 600a19.5 19.5 0 0 1-19.5 19.5A19.5 19.5 0 0 1 911 600a19.5 19.5 0 0 1 2.767-10.012m88.194 49.77A42 42 0 0 1 973.5 600a42 42 0 0 1 1.21-10.012m39.377 29.46A19.5 19.5 0 0 1 996 600a19.5 19.5 0 0 1 2.767-10.012M960.294 715.74A42 42 0 0 1 928.5 675a42 42 0 0 1 42-42 42 42 0 0 1 28.739 11.372m-28.082 50.117a19.5 19.5 0 0 1-.657.011A19.5 19.5 0 0 1 951 675a19.5 19.5 0 0 1 19.5-19.5 19.5 19.5 0 0 1 16.785 9.575m-60.62 126.75A42 42 0 0 1 888.5 750a42 42 0 0 1 42-42 42 42 0 0 1 28.229 10.901m-22.757 49.816a19.5 19.5 0 0 1-5.472.783A19.5 19.5 0 0 1 911 750a19.5 19.5 0 0 1 19.5-19.5 19.5 19.5 0 0 1 17.494 10.885m-46.757 130.609a42 42 0 0 1-.737.006 42 42 0 0 1-42-42 42 42 0 0 1 42-42 42 42 0 0 1 24.636 7.984m-17.416 52.13a19.5 19.5 0 0 1-7.22 1.386A19.5 19.5 0 0 1 881 830a19.5 19.5 0 0 1 19.5-19.5 19.5 19.5 0 0 1 16.278 8.763m-275.735-155.53A42 42 0 0 1 655 695a42 42 0 0 1-42 42 42 42 0 0 1-42-42 42 42 0 0 1 .104-2.95m44.819-16.33A19.5 19.5 0 0 1 632.5 695a19.5 19.5 0 0 1-19.5 19.5 19.5 19.5 0 0 1-19.5-19.5 19.5 19.5 0 0 1 4.158-12.037m-31.952 10.687A42 42 0 0 1 575 720a42 42 0 0 1-42 42 42 42 0 0 1-15.083-2.802m20.873-57.818A19.5 19.5 0 0 1 552.5 720a19.5 19.5 0 0 1-19.5 19.5 19.5 19.5 0 0 1-19.5-19.5 19.5 19.5 0 0 1 5.342-13.409m276.317-460.18C741.579 377.817 800 422.21 800 500c0 55-115 90-115 0 0-55 75-55 75-10 0 35-62.765 44.89-60 10 3.052-38.508 47.487-19.355 35-5m47.517-254.267c-57.74 135.6-2.033 172.157-2.033 251.057 0 55-85.484 58.21-80.484 8.21m70-265c-61.788 140.32-10 175-10 255m47.997-238.179C758.185 379.05 815 423.287 815 500c0 30.823-36.118 55.365-67.872 55.144m73.92-298.243C774.7 380.245 830 424.317 830 500c0 30.823-36.118 55.365-67.872 55.144m72.195-293.561C791.103 381.375 845 425.283 845 500c0 30.823-36.118 55.365-67.872 55.144m70.62-289.105C807.441 382.477 860 426.216 860 500c0 30.823-36.118 55.365-67.872 55.144m69.336-285.326C823.58 383.434 875 427.02 875 500c0 30.823-36.118 55.365-67.872 55.144m68.335-282.276C839.5 384.221 890 427.677 890 500c0 30.823-36.118 55.365-67.872 55.144m67.61-280.002C855.188 384.816 905 428.17 905 500c0 30.823-36.118 55.365-67.872 55.144m67.155-278.548C870.63 385.2 920 428.489 920 500c0 30.823-36.118 55.365-67.872 55.144M919.1 277.188C885.81 385.358 935 428.62 935 500c0 30.823-36.118 55.365-67.872 55.144m67.067-278.263C900.716 385.277 950 428.551 950 500c0 30.823-36.118 55.365-67.872 55.144m67.455-279.51C915.338 384.946 965 428.278 965 500c0 30.823-36.118 55.365-67.872 55.144m68.162-281.739C929.663 384.36 980 427.793 980 500c0 30.823-36.118 55.365-67.872 55.144m69.225-284.993C943.68 383.52 995 427.091 995 500c0 30.823-36.118 55.365-67.872 55.144m70.742-289.458C957.335 382.39 1010 426.142 1010 500c0 30.823-36.118 55.365-67.872 55.144M520 532.778C465.796 598.504 405 580 405 540s65-45 65-5c0 30-45 25-45 5 0-10 0-10 5-15m70 9.444c-25.083 26.792-49.177 31.341-67.463 18.093M540 532.222c-20 40-57.915 45.684-79.403 45.122M560 533.89c-20 40-55.863 43.196-77.35 42.634M580 535c-20 40-55.863 42.085-77.35 41.523m97.35-43.19c-20 40-55.863 43.752-77.35 43.19M620 531.667c-20 40-55.863 45.418-77.35 44.856M640 530.556c-20 40-55.863 46.529-77.35 45.967M660 531.111c-20 40-55.863 45.974-77.35 45.412M680 530c-20 40-55.863 47.085-77.35 46.523m92.873-38.51c-20.53 32.952-52.908 39.032-72.873 38.51M517.827 188.827C514.886 200.91 510 221.505 510 225c0 5 15 20 15 25s-25 30-35 45-25 60-25 70-5 20 10 20 20 15 20 15l-10 15 10 25s-1.838 13.675-5 20c-5 10 20 15 20 20s-20.437 15.02-20 20c3.908 44.548-24.383 56.24-25 50m70-200c15 0 10 40-10 30-30-15-45 5-15-5m105 35c2.205-6.063 7.383-10 15-10 25 0 10 45-30 45s-85-35-85-35v-15c40 15 30 45 85 50m-105-5c20 0 40 5 60 20-22.925-16.544-40-35-70-45m40-205-5 15s45-5 55-5c30 0 60 45 95 45-35 0-65-55-95.29-56.161-9.993-.383-13.614 9.42-33.614 9.42C536.382 218.258 525 210 525 210v0m105 80c-30 0-45.346-24.918-65-25-10.138-.042-30 5-30 5m60.87 9.644C610.874 299.647 557.375 309.072 545 295M239.87 597.116C233.83 582.484 222.965 557.69 210 535c-20-35-45-15-35 5s20 35 20 35m-19.71-35.065c-1.68-1.022-21.224-27.478-50.29-39.935-35-15-33.238 7.222-10 25 11.232 8.593 50 65 50 65m-60-74.71C85 495 60 500 80 530s55 75 55 75m-55-75c-15-20-30 0-15 20 18.974 25.298 40 80 40 80m-32.968-69.42C45 530 44.064 561.808 54.064 581.808 59.064 591.807 75 645 80 655l10.701 21.402m946.863 11.468c4.723 7.868 11.472 18.196-8.342 39.34-9.127 9.74-2.688 24.181 10.778 7.79 20-35 35-15 45.124-20.988-2.69 9.832 20.21 20.598-10.091 47.185C1065 770 1070 785 1085 770c21.131-34.329 35.47-13.85 45.785-19.505-3.009 9.74 19.526 21.247-11.626 46.83-10.314 8.472-5.806 23.627 9.675 9.125 29.05-27.949 37.808-4.533 49.21-7.426-5.351 8.676 13.587 25.457-22.976 42.43-12.106 5.62-11.535 21.422 6.008 12.4 31.171-23.043 37.003 1.267 48.672-.211-6.37 7.957 10.375 26.926-27.988 39.305-12.703 4.1-14.066 19.852 5.655 12.036 35.69-18.74 37.573 6.188 49.328 6.588-7.557 6.84 5.952 28.236-33.894 34.343-13.193 2.022-17.049 17.356 3.666 12.783m-180.022-250.936c4.573 14.621-28.113 34.819-9.701 47.174 20.48 13.743 35.302-2.517 53.208-19.936-14.905 20.047-30.697 38.701-10 55 19.435 16.73 36.52-2.195 54.984-19.021-15.55 19.55-29.984 39.021-17.594 56.48 12.792 18.024 38.142-.888 60.229-12.558-19.949 15.036-45.281 28.286-32.619 50.099 12.547 21.614 39.189 10.789 62.536 1.905C1165.9 879.391 1144.167 892.816 1155 915c10.372 21.24 33.237 11.175 57.702 6.126-23.926 7.689-52.164 19.088-29.302 51.67"
        />
      </symbol>
      <symbol
        id="D-K_svg__e"
        preserveAspectRatio="none"
        viewBox="0 0 1300 2000"
      >
        <path d="m1084.508 560-58.697 98.32c-187.342 313.797-97.79 497.698-8.713 763.002l23.092-10.265-57.762-175.512c64.447-156.058 179.24-235.865 317.572-291.102v-26.828c-138.021 53.796-258.328 132.84-329.172 282.387l.795 2.709-1.42-4.314c-13.49-48.251-23.45-95.135-27.496-142.518-9.688-113.478 12.898-231.197 104.568-384.744l58.698-98.32-29.782 49.915c108.496 68.998 180.944 154.62 223.809 263.286v-232.1c-52.113-39.226-130.673-80.473-187.98-91.012l-.064.108zM220 625c-38.243 16.87-50.73 39.82-50.184 65.85-13.29-.348-27.534 4.81-43.62 20.595 2.945-9.904 3.417-20.66 3.804-31.445-38.312 16.9-50.776 39.903-50.182 65.99-9.15.74-18.788 4.285-29.185 12.215C54.076 747.821 54.59 736.43 55 725c-38.537 16.999-50.922 40.174-50.17 66.451a46.417 46.417 0 0 0-4.83.903v13.449c6.455-.823 13.03-.954 22.26-.586-9.05 2.621-15.423 4.462-22.26 5.799v13.97c15.197.001 32.097-6.118 51.395-20.847-11.464-5.789-22.95-11.438-35.184-12.782 13.19-5.09 21.793-11.762 27.44-19.45 22.216 12.236 47.947 11.85 80.484-12.985-10.803-5.455-21.628-10.784-33.078-12.506 19.824-7.612 29.327-18.78 34.013-31.607 23.029 14.304 49.765 15.292 84.065-10.887-9.735-4.916-19.488-9.734-29.7-11.9 17.505-6.371 27.302-15.399 32.848-25.89 22.528 13.015 48.645 13.135 81.852-12.21-23.778-12.007-47.654-23.447-78.11 3.057 3.09-10.052 3.581-20.998 3.975-31.979Zm-15 25c-9.295 18.59-14.428 24.37-31.143 41.13-.467-.05-.936-.102-1.406-.14 13.07-21.403 18.434-26.875 32.549-40.99Zm52.28 4.807c2.376.016 4.927.082 7.72.193-19.154 5.548-26.54 7.606-51.53 8.73.202-.437.383-.88.571-1.322 19.62-5.653 27.964-7.704 43.238-7.601zm-85 50c2.376.016 4.927.082 7.72.193-19.935 5.775-27.006 7.775-54.58 8.87.053-.153.095-.309.146-.462 22.239-6.438 30.551-8.71 46.713-8.601zM115 705c-9.241 18.483-14.365 24.3-30.852 40.84-.535-.007-1.072 0-1.61.012C95.544 724.565 100.915 719.084 115 705Zm-75 45c-9.287 18.575-14.418 24.362-31.102 41.092-.52.021-1.044.06-1.568.1C20.49 769.62 25.84 764.158 40 750Zm47.28 9.807c2.376.016 4.927.082 7.72.193-18.542 5.371-26.021 7.474-49.139 8.623.42-.687.814-1.383 1.194-2.084 17.575-5.02 25.72-6.83 40.224-6.732zM523.075 810l4.608 105h260.644l26.547-105Zm467.71 71.871-2.306 9.463c-13.935 57.217-16.337 109.636-11.896 161.652.997 11.684 2.414 23.387 4.166 35.131l2.12 14.211 8.614-11.498c21.298-28.422 44.77-53.825 69.993-76.621l2.783-2.516-1.043-3.605c-17.22-59.464-30.254-90.3-65.016-119.902zm7.126 22.383c26.414 25.135 37.62 51.977 52.734 103.687-21.304 19.518-41.322 40.983-59.904 64.463-.855-6.831-1.621-13.647-2.201-20.437-4.087-47.877-2.144-95.767 9.371-147.713z" />
      </symbol>
      <symbol
        id="D-K_svg__d"
        preserveAspectRatio="none"
        viewBox="0 0 1300 2000"
      >
        <path
          fill="#44F"
          d="M600 445c-40 0-85-35-85-35v-15c40 15 30 45 85 50m-75-235-5 15s45-5 55-5c30 0 60 45 95 45-35 0-65-55-95.29-56.161-9.993-.383-13.614 9.42-33.614 9.42C536.382 218.258 525 210 525 210Zm49.667 73.061a11.249 20.385 0 0 1-11.249 20.385 11.249 20.385 0 0 1-11.249-20.385 11.249 20.385 0 0 1 11.249-20.384 11.249 20.385 0 0 1 11.249 20.384zm-85.658 289.637 133.641 3.825c19.965.522 52.342-5.558 72.988-38.356 8.822 11.653 21.898 16.73 35.873 16.97L730.424 560l-18.43 16.26c-74.36 65.612-115.842 79.924-204.95 102.131-5.836-35.708-11.98-70.797-18.035-105.693zM800 605c0 23.196-18.804 42-42 42-29.84.637-35.202-40.062-49.393-28.596A42 42 0 0 1 730 655c0 23.196-18.804 42-42 42-20.928 0-38.655-15.406-41.584-36.12-1.783.982-3.565 1.937-5.35 2.878A41.997 41.997 0 0 1 655 695c0 23.196-18.804 42-42 42-17.875 0-33.131-11.17-39.195-26.908A41.98 41.98 0 0 1 575 720c0 23.196-18.804 42-42 42-5.157 0-10.27-.949-15.082-2.8l2.217 19.343c96.262-24.137 164.257-47.608 247.79-118.543H910.32c-156.787 297.276-107.906 528.857-68.797 765.254 30.6.378 51.772 10.196 52.53 40.46l95.312-32.769c-74.331-196.57-139.016-358.158-88.234-560.95-.21.002-.42.005-.631.005-23.196 0-42-18.804-42-42s18.804-42 42-42a42 42 0 0 1 24.527 7.908c.513-1.363 1.03-2.726 1.553-4.094-21.577-2.022-38.08-20.133-38.08-41.814 0-23.196 18.804-42 42-42a41.995 41.995 0 0 1 28.121 10.809c.51-1.035 1.02-2.07 1.535-3.106-18.613-4.73-31.656-21.486-31.656-40.703 0-23.196 18.804-42 42-42a41.997 41.997 0 0 1 28.717 11.352c.28-.471.552-.94.834-1.41l1.902-3.186A41.994 41.994 0 0 1 974.71 590h-3.418a41.995 41.995 0 0 1 1.209 10c0 23.196-18.804 42-42 42s-42-18.804-42-42c0-3.37.407-6.727 1.209-10h-5.918A41.995 41.995 0 0 1 885 600c0 23.196-18.804 42-42 42s-42-18.804-42-42c0-3.37.407-6.727 1.209-10-9.2-1.207-2.261 7.468-2.209 15zm175.104-15 55.566 1.654.988-1.654zm23.631 172.9c94.584 60.402 136.897 120.76 165.899 221.531l18.766-11.634c-22.862-32.583 5.376-43.982 29.302-51.671-24.465 5.049-47.33 15.114-57.702-6.126-10.832-22.184 10.9-35.609 32.536-48.095-23.347 8.884-49.99 19.709-62.536-1.905-12.662-21.813 12.67-35.063 32.619-50.099-22.087 11.67-47.437 30.582-60.229 12.558-12.39-17.459 2.043-36.93 17.594-56.48C1096.52 787.805 1079.435 806.73 1060 790c-20.697-16.299-4.905-34.953 10-55-17.905 17.42-32.729 33.68-53.208 19.936-18.412-12.355 14.274-32.553 9.701-47.174m228.066 228.887c-36.465-111.861-100.267-193.368-209.091-262.347l-7.904 13.568c4.723 7.868 11.472 18.196-8.342 39.34-9.127 9.74-2.688 24.181 10.778 7.79 20-35 35-15 45.124-20.988-2.69 9.832 20.21 20.598-10.091 47.185C1065 770 1070 785 1085 770c21.131-34.329 35.47-13.85 45.785-19.505-3.009 9.74 19.526 21.247-11.626 46.83-10.314 8.472-5.806 23.627 9.675 9.125 29.05-27.949 37.808-4.533 49.21-7.426-5.351 8.676 13.587 25.457-22.976 42.43-12.106 5.62-11.535 21.422 6.008 12.4 31.171-23.043 37.003 1.267 48.672-.211-6.37 7.957 10.375 26.926-27.988 39.305-12.703 4.1-14.066 19.852 5.655 12.036 35.69-18.74 37.573 6.188 49.328 6.588-7.557 6.84 5.952 28.236-33.894 34.343-13.193 2.022-17.049 17.356 3.666 12.783zm-111.803 62.203-1.791-6.27c-27.634-96.72-63.334-149.574-152.397-206.618l-14.645 37.859c78.204 50.361 103.128 90.662 128.58 179.747l5.99 20.963"
        />
      </symbol>
      <symbol
        id="D-K_svg__c"
        preserveAspectRatio="none"
        viewBox="0 0 1300 2000"
      >
        <path
          fill="red"
          d="M750.06 71.416c-8.09 7.058-17.813 12.834-28.66 16.604-5.08 17.497-12.873 32.765-23.09 45.496-57.344-8.467-118.209-13.386-182.865-7.31-.233-1.284-1.036-2.561-1.799-3.845-8.76-14.743-13.228-28.237-17.212-39.74-10.56-2.087-20.47-6.123-29.678-10.008C485.609 111.42 500.836 149.583 510 190c220-50 290 135 490 75-3.103-54.365 11.226-104.257 33.283-148.727-7.295 1.614-15.012 2.782-23.283 3.727-2.746 15.66-7.591 29.77-15.182 42.076-62.438 13.153-131.213.635-208.168-13.49-7.44-15.904-12.003-34.04-12.789-53.951-9.612-6.35-17.653-14.366-23.8-23.219ZM1300 136.57l-40 39.998 1.262 450.93c14.241 8.907 27.212 17.772 38.738 26.432zm-186.938 426.563-7.09 9.681-58.697 98.32zm-88.003 26.094c-8.764.253-24.385 4.426-26.291.761A19.499 19.499 0 0 0 996 600c0 10.221 7.893 18.709 18.088 19.45-2.566-4.934 19.251-23.802 16.685-28.735-.635-1.222-2.793-1.573-5.714-1.488zm-279.504.761A19.498 19.498 0 0 0 738.5 605c0 10.77 8.73 19.5 19.5 19.5s19.5-8.73 19.5-19.5a19.5 19.5 0 0 0-7.047-15.006zm80.713 0A19.499 19.499 0 0 0 823.5 600c0 10.77 8.73 19.5 19.5 19.5s19.5-8.73 19.5-19.5c0-3.526-.956-6.986-2.766-10.012zm87.5 0A19.499 19.499 0 0 0 911 600c0 10.77 8.73 19.5 19.5 19.5S950 610.77 950 600c0-3.526-.956-6.986-2.766-10.012zM688 635.5c-.658 0-1.316.033-1.97.1l-15.44 10.615A19.503 19.503 0 0 0 668.5 655c0 10.77 8.73 19.5 19.5 19.5s19.5-8.73 19.5-19.5-8.73-19.5-19.5-19.5zm282.5 20c-10.77 0-19.5 8.73-19.5 19.5s8.73 19.5 19.5 19.5c.219 0 .437-.005.656-.012l16.13-29.414A19.5 19.5 0 0 0 970.5 655.5Zm-354.578 20.22-18.264 7.243A19.501 19.501 0 0 0 593.5 695c0 10.77 8.73 19.5 19.5 19.5s19.5-8.73 19.5-19.5c0-9.64-7.046-17.834-16.578-19.28zM778.836 690c-83.981 68.784-158.246 94.352-254.416 119.03l290.469.773c12.36-39.083 27.826-78.908 46.953-119.803ZM538.79 701.379l-19.95 5.213A19.498 19.498 0 0 0 513.5 720c0 10.77 8.73 19.5 19.5 19.5s19.5-8.73 19.5-19.5a19.5 19.5 0 0 0-13.709-18.621zM930.5 730.5c-10.77 0-19.5 8.73-19.5 19.5s8.73 19.5 19.5 19.5c1.852 0 3.695-.264 5.473-.783l12.021-27.332A19.5 19.5 0 0 0 930.5 730.5Zm-30 80c-10.77 0-19.5 8.73-19.5 19.5s8.73 19.5 19.5 19.5c2.473 0 4.924-.471 7.22-1.387l9.057-28.85A19.5 19.5 0 0 0 900.5 810.5Zm73.379 13.072c-30.287 84.62-37.401 159.34-31.172 232.307 4.045 47.383 14.005 94.266 27.809 143.32 35.467-73.406 82.796-130.262 138.2-174.976l-6.212-20.653c-25.453-89.085-50.378-129.386-128.625-179.998zm323.728 121.934-9.275 3.736L1300 978.207v-26.762zm-97.826 46.55-8.687 4.954 36.732 64.4 8.686-4.955zM1300 1054.015l-21.389 8.584 10.578 22.261 10.811-4.837zm-191.68 2.728-7.414 6.711 49.477 54.662 7.414-6.709zm127.694 28.526-31.817 20.628 14.1 19.811 30.053-19.373zm-67.186 49.302-26.365 26.895 18.51 16.033 24.316-25.082zm-133.646 3.555-5.588 8.293 61.828 41.656 5.588-8.293zm77.92 62.129-17.739 30.244 21.824 11.578 16.645-28.375zm-129.352 32.91-3.77 9.262 69.168 28.16 3.772-9.262z"
        />
      </symbol>
      <symbol
        id="D-K_svg__b"
        preserveAspectRatio="none"
        viewBox="0 0 1300 2000"
      >
        <path
          fill="#FC4"
          d="M426.281 0c36.472 61.814 68.48 122.794 83.719 190 220-50 290 135 490 75-6.148-107.698 56.115-197.837 111.957-265H426.281zM1300 80l-80 80 .459 444.092c29.157 15.313 56.88 32.778 79.541 49.828V80zM730.424 560l-18.43 16.26c-74.36 65.612-115.843 79.923-204.672 102.392l18.444 129.407C620.59 784.352 694.855 758.784 778.836 690h83.006c-36.784 78.647-60.018 153.335-73.578 225h-260.58l-.422 25h256.63c-28.003 175.123.233 332.482 26.881 486.045 48.287-3.56 94.945-5.651 84.227 43.955l122.098-48.678c-89.076-265.304-178.629-449.205 8.713-763.002l58.697-98.32H730.424zm330.373 88.537-15.328 25.766c108.823 68.979 172.625 150.484 209.09 262.345l27.664-11.847c-38.808-116.694-108.33-204.494-221.426-276.264zm-23.233 39.332-11.072 19.893c4.573 14.62-28.113 34.818-9.701 47.174 20.48 13.742 35.303-2.517 53.209-19.936-14.905 20.047-30.697 38.701-10 55 19.435 16.73 36.52-2.196 54.984-19.021-15.55 19.55-29.983 39.021-17.593 56.48 12.791 18.024 38.14-.89 60.228-12.559-19.948 15.037-45.281 28.287-32.619 50.1 12.547 21.614 39.19 10.79 62.537 1.906-21.636 12.486-43.37 25.91-32.537 48.094 10.372 21.24 33.238 11.174 57.703 6.125-23.926 7.69-52.164 19.09-29.303 51.672l23.114-14.098c-20.715 4.573-16.858-10.76-3.664-12.783 39.846-6.107 26.337-27.503 33.894-34.344-11.755-.4-13.638-25.329-49.328-6.588-19.72 7.816-18.359-7.936-5.656-12.035 38.363-12.379 21.618-31.349 27.988-39.306-11.669 1.478-17.5-22.831-48.672.212-17.542 9.022-18.114-6.78-6.008-12.4 36.564-16.974 17.625-33.755 22.975-42.432-11.4 2.894-20.159-20.522-49.209 7.426-15.481 14.503-19.989-.652-9.674-9.123 31.152-25.584 8.616-37.09 11.625-46.83-10.314 5.655-24.654-14.825-45.785 19.504-15 15-20 0-9.967-8.803 30.3-26.587 7.4-37.353 10.09-47.185C1074.999 720 1060 700 1040 735c-13.466 16.391-19.904 1.95-10.777-7.79 19.814-21.144 13.064-31.473 8.341-39.34zM1300 1025.496c-115.918 49.92-199.867 115.636-251.293 246.272l-3.16 9.85a1072.33 1072.33 0 0 1-43.29 18.347c12.186 35.715 25.428 73.478 37.933 111.092 79.026-34.51 160.32-78.753 259.81-144.452v-241.109z"
        />
      </symbol>
      <path id="D-K_svg__i" d="M-82.4-130.4H82.4v260.8H-82.4z" />
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
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__b"
    />
    <use
      transform="rotate(180)"
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__b"
    />
    <use
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__c"
    />
    <use
      transform="rotate(180)"
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__c"
    />
    <use
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__d"
    />
    <use
      transform="rotate(180)"
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__d"
    />
    <use
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__e"
    />
    <use
      transform="rotate(180)"
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__e"
    />
    <use
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__f"
    />
    <use
      transform="rotate(180)"
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__f"
    />
    <use
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__g"
    />
    <use
      transform="rotate(180)"
      width={164.8}
      height={260.8}
      x={-82.4}
      y={-130.4}
      xlinkHref="#D-K_svg__g"
    />
    <use xlinkHref="#D-K_svg__h" height={32} width={32} x={-114.4} y={-156} />
    <use
      xlinkHref="#D-K_svg__a"
      height={26.769}
      width={26.769}
      x={-111.784}
      y={-119}
    />
    <use
      xlinkHref="#D-K_svg__a"
      height={55.68}
      width={55.68}
      x={-89.68}
      y={-132.16}
    />
    <g transform="rotate(180)">
      <use xlinkHref="#D-K_svg__h" height={32} width={32} x={-114.4} y={-156} />
      <use
        xlinkHref="#D-K_svg__a"
        height={26.769}
        width={26.769}
        x={-111.784}
        y={-119}
      />
      <use
        xlinkHref="#D-K_svg__a"
        height={55.68}
        width={55.68}
        x={-89.68}
        y={-132.16}
      />
    </g>
    <use xlinkHref="#D-K_svg__i" stroke="#44F" fill="none" />
  </svg>
);
export default SvgDK;
