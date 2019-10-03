import React from 'react';

export const Filled = ({ style = {}, color = '#000000', size = '100%', className = '', viewBox = '0 0 24 24' }) => (
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
            d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"
		/>
	</svg>
);

export const Outlined = ({ style = {}, color = '#000000', size = '100%', className = '', viewBox = '0 0 24 24' }) => (
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
            d="M7,12H9V14H7V12M21,6V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2H18V4H19A2,2 0 0,1 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14H17V12H15V14M11,14H13V12H11V14Z"
		/>
	</svg>
);
