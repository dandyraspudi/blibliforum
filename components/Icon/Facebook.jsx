import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 9 16"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M5.39253 16V8.71181H7.84953L8.21762 5.85911H5.39253V4.04224C5.39253 3.2182 5.62129 2.65672 6.80292 2.65672H8.30044V0.112153C8.0399 0.0775003 7.14599 0 6.10584 0C3.93411 0 2.4478 1.32513 2.4478 3.7597V5.85911H0V8.71181H2.4478V16H5.39253Z" fill="#4267B2"/>
  </svg>
);

export default SVG;
