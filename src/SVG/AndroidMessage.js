import React from 'react';

 const AndroidMessage = ({ style = {}, color = '#000000', size = '100%', className = '', viewBox = '0 0 24 24' }) => (
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
			d="M20,20H7A2,2 0 0,1 5,18V8.94L2.23,5.64C2.09,5.47 2,5.24 2,5A1,1 0 0,1 3,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M8.5,7A0.5,0.5 0 0,0 8,7.5V8.5A0.5,0.5 0 0,0 8.5,9H18.5A0.5,0.5 0 0,0 19,8.5V7.5A0.5,0.5 0 0,0 18.5,7H8.5M8.5,11A0.5,0.5 0 0,0 8,11.5V12.5A0.5,0.5 0 0,0 8.5,13H18.5A0.5,0.5 0 0,0 19,12.5V11.5A0.5,0.5 0 0,0 18.5,11H8.5M8.5,15A0.5,0.5 0 0,0 8,15.5V16.5A0.5,0.5 0 0,0 8.5,17H13.5A0.5,0.5 0 0,0 14,16.5V15.5A0.5,0.5 0 0,0 13.5,15H8.5Z"
		/>
	</svg>
);
export default AndroidMessage