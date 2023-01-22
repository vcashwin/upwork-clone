import React from "react";

function RampupCard() {
  return (
    <div className="font-sans hidden lg:flex space-x-4 items-center bg-[rgb(31,87,195)] rounded-2xl px-14">
      {/* Image */}
      <div className="w-36 h-auto m-4">
        <RocketSVG />
      </div>
      {/* Description */}
      <div className="flex-1 flex-col w-48 text-white space-y-2">
        <h1 className="text-2xl font-medium">Join the RampUp Challenge</h1>
        <p className="text-sm">
          There are multiple ways to get started on Upwork, try participating in
          this challenge to earn Connects and get a head start on actions that
          could set you up for success!
        </p>
        <button className="bg-[rgb(16,138,0)] p-2 px-4 text-white rounded-full text-xs font-medium">
          Join Challenge
        </button>
      </div>
    </div>
  );
}

function RocketSVG() {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 145 130"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient
          id="rocket-227-b-uid-148"
          x1="4.07"
          y1="120.29"
          x2="124.07"
          y2="120.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".72" stop-color="#c3d2c3"></stop>
          <stop offset=".78" stop-color="#c3d2c3" stop-opacity=".78"></stop>
          <stop offset=".93" stop-color="#c3d2c3" stop-opacity=".23"></stop>
          <stop offset="1" stop-color="#c3d2c3" stop-opacity=".01"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-c-uid-148"
          x1="97.38"
          y1="35.15"
          x2="116.73"
          y2="54.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#a84884"></stop>
          <stop offset=".04" stop-color="#ad4a87"></stop>
          <stop offset=".08" stop-color="#bb5192"></stop>
          <stop offset=".13" stop-color="#d25ca2"></stop>
          <stop offset=".18" stop-color="#f36cba"></stop>
          <stop offset=".19" stop-color="#f66dbc"></stop>
          <stop offset=".48" stop-color="#f66dbc"></stop>
          <stop offset=".78" stop-color="#a84884"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-d-uid-148"
          x1="83.51"
          y1="72.68"
          x2="92.16"
          y2="80.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#a84884"></stop>
          <stop offset=".78" stop-color="#a84884" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-e-uid-148"
          x1="95.95"
          y1="36.57"
          x2="115.95"
          y2="56.56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9aaa97"></stop>
          <stop offset=".04" stop-color="#9fae9c"></stop>
          <stop offset=".08" stop-color="#acbaaa"></stop>
          <stop offset=".13" stop-color="#c3cec1"></stop>
          <stop offset=".18" stop-color="#e2e9e2"></stop>
          <stop offset=".19" stop-color="#e4ebe4"></stop>
          <stop offset=".48" stop-color="#e4ebe4"></stop>
          <stop offset=".78" stop-color="#9aaa97"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-f-uid-148"
          x1="81.48"
          y1="65.85"
          x2="88.49"
          y2="72.43"
          gradientTransform="rotate(45 85.794 69.907)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".21" stop-color="#f66dbc"></stop>
          <stop offset=".78" stop-color="#a84884"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-a-uid-148"
          x1="82.38"
          y1="64.95"
          x2="89.38"
          y2="71.53"
          gradientTransform="rotate(45 86.695 69.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".48" stop-color="#f66dbc"></stop>
          <stop offset=".78" stop-color="#a84884"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-g-uid-148"
          x1="98.46"
          y1="95.96"
          x2="89.67"
          y2="83.63"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f66dbc"></stop>
          <stop offset=".13" stop-color="#a84884"></stop>
          <stop offset=".16" stop-color="#ad4a87"></stop>
          <stop offset=".19" stop-color="#bb5192"></stop>
          <stop offset=".22" stop-color="#d25ca2"></stop>
          <stop offset=".25" stop-color="#f36cba"></stop>
          <stop offset=".25" stop-color="#f66dbc"></stop>
          <stop offset=".48" stop-color="#f66dbc"></stop>
          <stop offset=".78" stop-color="#a84884"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-h-uid-148"
          x1="88.13"
          y1="88.24"
          x2="110.24"
          y2="88.24"
          href="https://www.upwork.com/nx/find-work/most-recent#rocket-227-a-uid-148"
        ></linearGradient>
        <linearGradient
          id="rocket-227-i-uid-148"
          x1="59.06"
          y1="57.35"
          x2="72.53"
          y2="65.81"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f66dbc"></stop>
          <stop offset=".12" stop-color="#a84884"></stop>
          <stop offset=".15" stop-color="#ad4a87"></stop>
          <stop offset=".18" stop-color="#bb5192"></stop>
          <stop offset=".21" stop-color="#d25ca2"></stop>
          <stop offset=".25" stop-color="#f36cba"></stop>
          <stop offset=".25" stop-color="#f66dbc"></stop>
          <stop offset=".48" stop-color="#f66dbc"></stop>
          <stop offset=".78" stop-color="#a84884"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-j-uid-148"
          x1="52.5"
          y1="60"
          x2="98.92"
          y2="60"
          href="https://www.upwork.com/nx/find-work/most-recent#rocket-227-a-uid-148"
        ></linearGradient>
        <linearGradient
          id="rocket-227-k-uid-148"
          x1="45.21"
          y1="108.94"
          x2="58.3"
          y2="122.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".18" stop-color="#f2f7f2"></stop>
          <stop offset=".67" stop-color="#c3d2c3"></stop>
        </linearGradient>
        <linearGradient
          id="rocket-227-o-uid-148"
          x1="113.39"
          y1="49.42"
          x2="105.51"
          y2="41.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".48" stop-color="#d5e0d5"></stop>
          <stop offset=".81" stop-color="#9aaa97"></stop>
        </linearGradient>
        <radialGradient
          id="rocket-227-l-uid-148"
          cx="54.8"
          cy="88.83"
          r="21.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".46" stop-color="#f2f7f2"></stop>
          <stop offset=".66" stop-color="#f0f5f0"></stop>
          <stop offset=".76" stop-color="#e9f0e9"></stop>
          <stop offset=".82" stop-color="#dce6dc"></stop>
          <stop offset=".88" stop-color="#cad8ca"></stop>
          <stop offset=".9" stop-color="#c3d2c3"></stop>
        </radialGradient>
        <radialGradient
          id="rocket-227-m-uid-148"
          cx="45.4"
          cy="101.58"
          r="19.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f2f7f2"></stop>
          <stop offset=".43" stop-color="#f2f7f2"></stop>
          <stop offset=".5" stop-color="#f2f7f2"></stop>
          <stop offset=".68" stop-color="#f0f5f0"></stop>
          <stop offset=".77" stop-color="#e9f0e9"></stop>
          <stop offset=".83" stop-color="#dce6dc"></stop>
          <stop offset=".88" stop-color="#cad7ca"></stop>
          <stop offset=".9" stop-color="#c3d2c3"></stop>
        </radialGradient>
        <radialGradient
          id="rocket-227-n-uid-148"
          cx="20.36"
          cy="103.79"
          r="32.19"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".5" stop-color="#f2f7f2"></stop>
          <stop offset=".68" stop-color="#f0f5f0"></stop>
          <stop offset=".77" stop-color="#e9f0e9"></stop>
          <stop offset=".83" stop-color="#dce6dc"></stop>
          <stop offset=".88" stop-color="#cad7ca"></stop>
          <stop offset=".9" stop-color="#c3d2c3"></stop>
        </radialGradient>
        <radialGradient
          id="rocket-227-p-uid-148"
          cx="113.28"
          cy="48.53"
          r="7.6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".63" stop-color="#91e6b2"></stop>
          <stop offset=".72" stop-color="#8ee6b2"></stop>
          <stop offset=".78" stop-color="#85e4b3"></stop>
          <stop offset=".83" stop-color="#76e1b4"></stop>
          <stop offset=".88" stop-color="#60ddb6"></stop>
          <stop offset=".92" stop-color="#44d9b8"></stop>
          <stop offset=".97" stop-color="#21d3bb"></stop>
          <stop offset="1" stop-color="#01cdbe"></stop>
        </radialGradient>
      </defs>
      <rect
        x="4.07"
        y="119.5"
        width="120"
        height="1.58"
        rx=".79"
        fill="url(#rocket-227-b-uid-148)"
      ></rect>
      <path
        d="M31 55.07l.08.9a1.08 1.08 0 001.52.88l.82-.38-.74.52a1.07 1.07 0 000 1.75l.74.52-.82-.38a1.07 1.07 0 00-1.52.87l-.08.91-.08-.91a1.06 1.06 0 00-1.51-.87l-.83.38.75-.52a1.08 1.08 0 000-1.75l-.75-.52.83.38a1.07 1.07 0 001.51-.85zm97.06 13.75l.08.91a1.06 1.06 0 001.51.87l.82-.38-.74.52a1.08 1.08 0 000 1.75l.74.52-.82-.38a1.07 1.07 0 00-1.51.88l-.08.9-.09-.9a1.07 1.07 0 00-1.51-.88l-.82.38.74-.52a1.08 1.08 0 000-1.75l-.74-.52.82.38a1.06 1.06 0 001.51-.87zm-27.9-51.5a4.72 4.72 0 00-4.27 4.49l-.21 4.47-.21-4.47a4.74 4.74 0 00-4.27-4.49 4.74 4.74 0 004.28-4.48l.19-3.92.19 3.92a4.74 4.74 0 004.3 4.48z"
        fill="#fccd81"
      ></path>
      <path
        d="M128.87 46.82A56.54 56.54 0 00145 13a2.07 2.07 0 00-2.27-2.28 56.54 56.54 0 00-33.82 16.1l-.12.12-6.39 6.36-6.47 6.48-6.48 6.48L83 52.74l-6.48 6.47L70 65.69l-6.48 6.48 20 20L90 85.69l6.48-6.48 6.52-6.48 6.47-6.48 6.48-6.47 6.48-6.48 6.35-6.36.12-.12z"
        fill="url(#rocket-227-c-uid-148)"
      ></path>
      <path
        d="M82.24 90.88l6.45-6.45c5.27-5.27 7.13-13.3 5-21.64L79.43 77.07a22.82 22.82 0 011 12z"
        fill="url(#rocket-227-d-uid-148)"
      ></path>
      <path
        d="M83.53 92.16c-.74.75-2.14.71-3.91.06a23.54 23.54 0 01-6.11-3.71 39 39 0 01-3.33-3 37.56 37.56 0 01-3-3.33 23.83 23.83 0 01-3.71-6.11c-.65-1.77-.68-3.17.06-3.91s2.14-.71 3.91 0a23.47 23.47 0 016.11 3.7 37.56 37.56 0 013.33 3 39 39 0 013 3.33 23.54 23.54 0 013.71 6.11c.65 1.7.68 3.12-.06 3.86z"
        fill="#a84884"
      ></path>
      <path
        d="M128.87 46.82c.75-.74.72-2.14.06-3.91a23.54 23.54 0 00-3.71-6.11 39 39 0 00-3-3.33 37.56 37.56 0 00-3.33-3 23.54 23.54 0 00-6.11-3.71c-1.77-.65-3.17-.68-3.91.06l-26 26c.74-.75 2.14-.72 3.91-.06a23.38 23.38 0 016.11 3.71 39.1 39.1 0 013.34 3 41 41 0 013 3.33 23.75 23.75 0 013.7 6.11c.66 1.77.69 3.17-.05 3.91z"
        fill="url(#rocket-227-e-uid-148)"
      ></path>
      <path
        d="M78 86.62c-.33.33-.95.32-1.74 0A10.76 10.76 0 0173.52 85a18.66 18.66 0 01-2.81-2.81 10.41 10.41 0 01-1.65-2.73c-.3-.78-.31-1.41 0-1.74s1-.32 1.74 0a10.41 10.41 0 012.73 1.65 18.66 18.66 0 012.81 2.81 10.76 10.76 0 011.66 2.7c.31.79.32 1.41 0 1.74z"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width=".23"
      ></path>
      <rect
        x="75.63"
        y="68.73"
        width="20.33"
        height="2.34"
        rx="1.17"
        transform="rotate(-45 85.795 69.903)"
        fill="url(#rocket-227-f-uid-148)"
      ></rect>
      <rect
        x="76.53"
        y="67.83"
        width="20.33"
        height="2.34"
        rx="1.17"
        transform="rotate(-45 86.691 69.001)"
        fill="url(#rocket-227-a-uid-148)"
      ></rect>
      <path
        d="M100.93 74.77c2.1 8.34.24 16.38-5 21.64l-8.16 8.16c-.38.38-1.12-.17-.92-.69a21.84 21.84 0 00-.18-14.82l14.29-14.29z"
        fill="url(#rocket-227-g-uid-148)"
      ></path>
      <path
        d="M102.42 73.28c2.11 8.34.24 16.37-5 21.64l-8.16 8.16c-.38.38-1.12-.17-.92-.69a21.86 21.86 0 00-.18-14.83l14.29-14.28z"
        fill="url(#rocket-227-h-uid-148)"
      ></path>
      <path
        d="M88.61 89.1l1.24-1.24 6.48-6.48 6.45-6.45q-.15-.83-.36-1.65L88.13 87.56c.18.52.34 1.03.48 1.54z"
        fill="#a84884"
      ></path>
      <path
        d="M80.93 54.78c-8.34-2.11-16.37-.24-21.64 5L51.13 68c-.38.38.17 1.12.69.93a21.8 21.8 0 0114.83.17l14.28-14.32z"
        fill="url(#rocket-227-i-uid-148)"
      ></path>
      <path
        d="M82.42 53.28c-8.33-2.1-16.37-.24-21.64 5l-8.16 8.16c-.38.38.18 1.12.69.92a21.86 21.86 0 0114.83.18l14.28-14.26z"
        fill="url(#rocket-227-j-uid-148)"
      ></path>
      <polygon
        points="88.61 89.1 86.96 90.03 86.64 89.06 88.13 87.56 88.61 89.1"
        fill="#a84884"
      ></polygon>
      <path
        d="M78 84.88a10.76 10.76 0 00-1.66-2.73 18.66 18.66 0 00-2.81-2.81 10.41 10.41 0 00-2.73-1.65c-.79-.3-1.41-.31-1.74 0l-8.87 8.91a8.75 8.75 0 01-4.51 2.4 9.39 9.39 0 00-7.42 7.34 9.69 9.69 0 00-.19 1.92 14 14 0 00-17.07 8.5 26.18 26.18 0 00-31 14.32h54.33a13.93 13.93 0 003.38-12.24l-.26-1.21a9.38 9.38 0 009.19-7.51v-.15A8.56 8.56 0 0169 95.6l9-9c.32-.31.31-.93 0-1.72z"
        fill="url(#rocket-227-k-uid-148)"
      ></path>
      <path
        d="M66.09 94.91a9.83 9.83 0 00-6.6-5.63h-.22a8.57 8.57 0 00-5.41.36 9.36 9.36 0 00-5.6 6.79 9.69 9.69 0 00-.19 1.92l9.38 9.33a9.38 9.38 0 009.19-7.51 8.78 8.78 0 00-.55-5.26z"
        fill="url(#rocket-227-l-uid-148)"
      ></path>
      <path
        d="M57.71 108.84l-.26-1.21-2.45-3.94a12.32 12.32 0 00-6.59-5.27l-.4-.13-.17-.05-.24-.07h-.19l-.24-.06L47 98h-5.36c-.15 0-.31 0-.46.09A13.92 13.92 0 0031 106.76l6 14.32h17.33a13.93 13.93 0 003.38-12.24z"
        fill="url(#rocket-227-m-uid-148)"
      ></path>
      <path
        d="M43.69 116.56a20.56 20.56 0 00-10.2-8.94 24.75 24.75 0 00-2.51-.86 25.91 25.91 0 00-5-.91c-.63 0-1.26-.08-1.9-.09h-3.63L20 106h-1.08l-.29.06h-.24A26 26 0 000 121.08h46.25z"
        fill="url(#rocket-227-n-uid-148)"
      ></path>
      <circle
        cx="109.82"
        cy="45.89"
        r="5.54"
        fill="url(#rocket-227-o-uid-148)"
      ></circle>
      <circle
        cx="109.82"
        cy="45.89"
        r="4.72"
        fill="url(#rocket-227-p-uid-148)"
      ></circle>
      <path
        d="M107.21 43.28a4.72 4.72 0 016.29-.34 3.25 3.25 0 00-.35-.39 4.72 4.72 0 10-6.67 6.67 3.25 3.25 0 00.39.35 4.72 4.72 0 01.34-6.29z"
        fill="#01cdbe"
      ></path>
    </svg>
  );
}

export default RampupCard;
