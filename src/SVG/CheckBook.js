import React from 'react'

const CheckBook = ({
  style = {},
  color = '#000000',
  size = '100%',
  className = '',
  viewBox = '0 0 24 24',
}) => (
  <svg
    width={size}
    style={style}
    height={size}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={color}
      d="M5,14H19V15H5V14M21,17V8H3V17H21M1,5H23V19H1V5M5,10H12V12H5V10Z"
    />
  </svg>
)
export default CheckBook
