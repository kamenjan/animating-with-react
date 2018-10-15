import React, { Component } from 'react';
import "./parallaxLayer.scss";

const ParallaxLayer = ({name, initialPosition, viewportTopOffset, modifier, img, color}) => {

	let style = {
		background: `no-repeat top center / 3633px 100% url("${img}")`,
		backgroundColor: color,
		transform: `translate3d(0px, ${Math.round(initialPosition + (viewportTopOffset * modifier))}px, 0px)`
	}

	return(
		<div className={`${name} parallax-layer`} style={{...style}} ></div>
	)
}

export default ParallaxLayer;