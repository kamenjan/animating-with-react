import React, { Component } from "react";

import "./global.css";
import { TweenLite } from 'gsap';

export default class Main extends Component {

	constructor() {
		super();
		this.state = {};

		this.lastWheelEventTime = 0;
		this.delay = 10;
		this.position = "down";

		this.handleMouseWheel = this.handleMouseWheel.bind(this);
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {}

	componentWillUnmount() {}


	handleMouseWheel(event) {
		if (this.lastWheelEventTime >= (Date.now() - this.delay)) return;
		this.lastWheelEventTime = Date.now();

		console.log(event.deltaY);

		let scrollDirection = (event.deltaY > 0) ? "up" : "down";
		// let containerHeight = window.getComputedStyle(event.currentTarget, null).height;
		let layers = event.currentTarget.childNodes;
		layers.forEach( (layer) => {
			// Don't process/animate background element
			if ( layer.getAttribute('id') === "background" ) return;

			let currentLayerHeight = window.getComputedStyle(layer, null).height;
			let newLayerHeight;

			if (scrollDirection === "up" && this.position === "up") {
				console.log(this.position);
				newLayerHeight = parseInt(currentLayerHeight) + parseInt(currentLayerHeight)/100*40;
				TweenLite.to( layer, 1, {height: newLayerHeight} );
			}

			if (scrollDirection === "down" && this.position === "down") {
				newLayerHeight = parseInt(currentLayerHeight) - parseInt(currentLayerHeight)/100*40;
				TweenLite.to( layer, 1, {height: newLayerHeight } );
			}
		});

		this.position = scrollDirection === "up" ? "down" : "up";
		// console.log(this.position);
	}

	render() {
		return (
			<div id={"container"} onWheel = {(event) => this.handleMouseWheel(event)}>
				<div id={"background"} className={"parallax-element"}></div>
				<div id={"midlands"} className={"parallax-element"}></div>
				<div id={"foreground"} className={"parallax-element"}></div>
			</div>
		);
	}
}