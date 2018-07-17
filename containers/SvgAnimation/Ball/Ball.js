/* Example of stateless component */

import React, { Component } from 'react';

const Ball = () => {

	let style = {
		background: `no-repeat top center / 3633px 100% url("${img}")`,
		backgroundColor: color,
		transform: `translate3d(0px, ${Math.round(initialPosition + (viewportTopOffset * modifier))}px, 0px)`
	};

	return(
		<div className={`ball`} style={{...style}} ></div>
	)
};

export default Ball;