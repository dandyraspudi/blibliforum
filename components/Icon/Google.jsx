import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 24 24"
}) => (
  <svg
    width={width}
    style={style}
    height={width} 
    fill="none" 
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g clip-path="url(#clip0)">
    <path d="M5.31891 14.5035L4.4835 17.6222L1.43011 17.6868C0.517594 15.9942 0 14.0578 0 12C0 10.0101 0.483938 8.13359 1.34175 6.48129H1.34241L4.06078 6.97967L5.25159 9.68173C5.00236 10.4083 4.86652 11.1883 4.86652 12C4.86661 12.8809 5.02617 13.7248 5.31891 14.5035Z" fill="#FBBB00"/>
    <path d="M23.7904 9.75827C23.9282 10.4842 24 11.2338 24 12C24 12.8591 23.9097 13.6972 23.7376 14.5055C23.1535 17.2563 21.6271 19.6583 19.5126 21.3581L19.5119 21.3574L16.088 21.1827L15.6034 18.1576C17.0065 17.3348 18.103 16.0471 18.6806 14.5055H12.2639V9.75827H18.7742H23.7904Z" fill="#518EF8"/>
    <path d="M19.5119 21.3574L19.5125 21.358C17.4561 23.011 14.8437 24 12 24C7.43012 24 3.45694 21.4457 1.43011 17.6868L5.31891 14.5035C6.3323 17.2081 8.94132 19.1334 12 19.1334C13.3147 19.1334 14.5464 18.778 15.6033 18.1576L19.5119 21.3574Z" fill="#28B446"/>
    <path d="M19.6595 2.76262L15.7721 5.94525C14.6782 5.26153 13.3852 4.86656 12 4.86656C8.87206 4.86656 6.21425 6.88017 5.25163 9.68175L1.34239 6.48131H1.34174C3.33889 2.63077 7.36217 0 12 0C14.9116 0 17.5813 1.03716 19.6595 2.76262Z" fill="#F14336"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
  </svg>
);

export default SVG;
