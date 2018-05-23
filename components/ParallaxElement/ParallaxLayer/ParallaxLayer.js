import React, { Component } from 'react';

const ParallaxLayer = ({name, initialPosition, viewportTopOffset, modifier, img, color}) => {

	let newTopPosition = { marginTop: `${Math.round(initialPosition + (viewportTopOffset * modifier))}px` };
	let style = {
		position: "absolute",
		width: "100%",
		height: "100%",
		background: `no-repeat top center / 3633px 100% url("${img}")`,
		backgroundColor: color
	};

	return(
		<div className={name} style={{...style,...newTopPosition}} ></div>
	)
};

export default ParallaxLayer;