import React from 'react';

export const Forum = ({ style = {}, color = '#000000', size = '100%', className = '', viewBox = '0 0 24 24' }) => (
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
			d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"
		/>
	</svg>
);

export const ForumOutline = ({ style = {}, color = '#000000', size = '100%', className = '', viewBox = '0 0 24 24' }) => (
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
            d="M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"
		/>
	</svg>
);

