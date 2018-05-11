import React, { Component } from "react";

import "./global.css";
import { TweenLite } from 'gsap';
import ParallaxLayer from "./components/ParallaxLayer/ParallaxLayer"

export default class Main extends Component {

	constructor() {
		super();
		super();
		this.state = {
			positionFromTop: 300
		};

		this.lastWheelEventTime = 0;
		this.delay = 10;
		this.position = "down";

		// this.handleMouseWheel = this.handleMouseWheel.bind(this);
		this.updatePosition = this.updatePosition.bind(this);
		this.midlands = React.createRef();
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {
		// this.updatePosition();
		// window.addEventListener("resize", this.updatePosition.bind(this));
		window.addEventListener("scroll", this.updatePosition.bind(this));
	}

	componentWillUnmount() {
		// window.removeEventListener("resize", this.updatePosition.bind(this));
		window.removeEventListener("scroll", this.updatePosition.bind(this));
	}

	updatePosition (event) {
		let offset = document.documentElement.scrollTop;

		// let currentPosition = this.state.positionFromTop;

		// let newPosition = Math.round( offset - 1.2 );
		// let newPosition = Math.round( (offset + 300) * 0.9 );

		this.setState({ positionFromTop: offset });

		// console.log(this.midlands.current.style.top);

		// this.midlands.current.style.top = "100px";

		// .style.background = "100px"
		// console.log(this.state.positionFromTop);
		// let newPosition = Math.round( (this.state.positionFromTop + 300) * 0.7 );

	}

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
		let parallaxAnimation;
		if (this.midlands.current) {
			// This modifier represents scale from 0 (fixed position) - 1 (normal scroll flow)
			let modifier = 0.5;
			let screeOffset = this.state.positionFromTop;
			let newPosition = (300 + (screeOffset * modifier));
			parallaxAnimation = {
				top: `${Math.round(newPosition)}px`
			};
		}

		return (
			<div id={"container"}>
				<div id={"background"} className={"parallax-element"}>
					background
				</div>
				<div id={"midlands"} className={"parallax-element"} style={parallaxAnimation} ref={this.midlands}>
					midlands
				</div>
				<div id={"foreground"} className={"parallax-element"}>
					foreground
				</div>
				{/*<ParallaxLayer*/}
					{/*initialTopPosition={300}*/}
					{/*modifier={0.5}*/}
					{/*viewportTopOffset={this.state.positionFromTop}*/}
				{/*/>*/}
			</div>
		);
	}
}