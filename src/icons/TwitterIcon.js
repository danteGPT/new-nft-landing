import React from "react";

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="67"
      height="67"
      fill="none"
      viewBox="0 0 87 87"
    >
      <g filter="url(#filter0_d_763_31569)" shapeRendering="crispEdges">
        <rect
          width="55"
          height="55"
          x="16"
          fill="url(#paint0_linear_763_31569)"
          rx="16"
        ></rect>
        <rect
          width="54"
          height="54"
          x="16.5"
          y="0.5"
          stroke="url(#paint1_linear_763_31569)"
          rx="15.5"
        ></rect>
      </g>
      <path
        fill="#EBEEF6"
        d="M56.978 21.557v.859c0 8.895-6.789 19.164-19.164 19.164-3.824 0-7.348-1.117-10.355-3.008.515.043 1.074.086 1.59.086 3.136 0 6.058-1.074 8.378-2.879a6.668 6.668 0 01-6.273-4.683c.43.086.816.129 1.289.129.601 0 1.203-.086 1.762-.258a6.688 6.688 0 01-5.414-6.574v-.086a6.619 6.619 0 003.05.859 6.748 6.748 0 01-3.008-5.629c0-1.246.344-2.406.903-3.394a19.166 19.166 0 0013.879 7.046c-.13-.472-.172-1.03-.172-1.546a6.73 6.73 0 016.746-6.747c1.934 0 3.695.817 4.898 2.106a13.69 13.69 0 004.297-1.633c-.515 1.59-1.59 2.879-2.965 3.738 1.375-.171 2.665-.515 3.868-1.074a12.311 12.311 0 01-3.309 3.524z"
      ></path>
      <defs>
        <filter
          id="filter0_d_763_31569"
          width="87"
          height="87"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="16"></feOffset>
          <feGaussianBlur stdDeviation="8"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_763_31569"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_763_31569"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_763_31569"
          x1="44.718"
          x2="44.718"
          y1="55"
          y2="16.355"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0B0F1E"></stop>
          <stop offset="1" stopColor="#0B0F1E" stopOpacity="0.62"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_763_31569"
          x1="43.5"
          x2="43.5"
          y1="55"
          y2="10.132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0874C2"></stop>
          <stop offset="1" stopColor="#0874C2" stopOpacity="0.24"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default TwitterIcon;
