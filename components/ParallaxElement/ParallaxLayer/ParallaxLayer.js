import React, { Component } from 'react';

const ParallaxLayer = ({initialPosition, viewportTopOffset, modifier, img }) => {

	let newTopPosition = { marginTop: `${Math.round(initialPosition + (viewportTopOffset * modifier))}px` };

	let style = {
		position: "absolute",
		width: "100%",
		height: "1038px",
		background: `no-repeat top center / 3633px 1038px url("${img}")`
	};

	return(
		<div style={{...style,...newTopPosition}} ></div>
	)
};

export default ParallaxLayer;