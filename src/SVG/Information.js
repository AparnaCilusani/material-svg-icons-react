import React from 'react'

export const Information = ({
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
      d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
)

export const InformationOutline = ({
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
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>
  )

  export const CellphoneInfo = ({
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
        d="M13 7H11V9H13V7M13 11H11V17H13V11M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1M17 19H7V5H17V19Z"
      />
    </svg>
  )
