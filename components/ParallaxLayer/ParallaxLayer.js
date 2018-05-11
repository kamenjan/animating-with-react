import React, { Component } from 'react';

// what do i need from papa? 1. position from top, 2.
const ParallaxLayer = (props) => {

	let topPosition;
	let modifier = props.modifier;
	let screenOffset = props.viewportTopOffset;
	let newPosition = (props.initialTopPosition + (screenOffset * modifier));
	topPosition = {
		top: `${Math.round(newPosition)}px`
	};

	let style = {
		position: "absolute",
		width: "100%",
		// Below are placeholders
		height: "100%",
		background: "no-repeat top/160% url(" + props.img + ")"
	};

	let imgStyle = {
		// width: "100%"
	};

	return(
		<div style={{...style,...topPosition}} >
			{/*<img src={props.img} alt="" style={imgStyle}/>*/}
		</div>
	)
};

export default ParallaxLayer;