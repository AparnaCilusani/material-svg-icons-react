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
			d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"
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
			d="M9,13.75C6.66,13.75 2,14.92 2,17.25V19H16V17.25C16,14.92 11.34,13.75 9,13.75M4.34,17C5.18,16.42 7.21,15.75 9,15.75C10.79,15.75 12.82,16.42 13.66,17M9,12A3.5,3.5 0 0,0 12.5,8.5A3.5,3.5 0 0,0 9,5A3.5,3.5 0 0,0 5.5,8.5A3.5,3.5 0 0,0 9,12M9,7A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 9,10A1.5,1.5 0 0,1 7.5,8.5A1.5,1.5 0 0,1 9,7M16.04,13.81C17.2,14.65 18,15.77 18,17.25V19H22V17.25C22,15.23 18.5,14.08 16.04,13.81M15,12A3.5,3.5 0 0,0 18.5,8.5A3.5,3.5 0 0,0 15,5C14.46,5 13.96,5.13 13.5,5.35C14.13,6.24 14.5,7.33 14.5,8.5C14.5,9.67 14.13,10.76 13.5,11.65C13.96,11.87 14.46,12 15,12Z"
		/>
	</svg>
);
