import React, { Component } from 'react';
import "./parallaxLayer.scss";

const ParallaxLayer = ({name, initialPosition, viewportTopOffset, modifier, img, color}) => {

	let transform = { transform: `translate3d(0px, ${Math.round(initialPosition + (viewportTopOffset * modifier))}px, 0px)`};

	let style = {
		background: `no-repeat top center / 3633px 100% url("${img}")`,
		backgroundColor: color
	};

	return(
		<div className={`${name} parallax-layer`} style={{...style,...transform}} ></div>
	)
};

export default ParallaxLayer;