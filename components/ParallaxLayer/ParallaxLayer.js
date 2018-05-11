import React, { Component } from 'react';

// what do i need from papa? 1. position from top, 2.
const ParallaxLayer = (props) => {

	let topPosition;
	// This modifier represents scale from 0 (fixed position) - 1 (normal scroll flow)
	let modifier = props.modifier;
	let screeOffset = props.viewportTopOffset;
	let newPosition = (props.initialTopPosition + (screeOffset * modifier));
	topPosition = {
		top: `${Math.round(newPosition)}px`
	};

	return(
		<div
			id={"foreground"}
			className={"parallax-element"}
			style={topPosition}
		>

		</div>
	)
};

export default ParallaxLayer;