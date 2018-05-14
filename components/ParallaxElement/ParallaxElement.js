import React, { Component } from "react";

import "./parallax.scss";
import ParallaxLayer from "./ParallaxLayer/ParallaxLayer"

// import parallax images
import imageParallaxBackground from "static/background.png";
import imageParallaxSoncek from "static/soncek.png";
import imageParallaxFarmidlands from "static/farmidlandsparalax.png";
import imageParallaxMidlands from "static/midlandsparalax.png";
import imageParallaxForeground from "static/foregroundparalax.png";
import TweenMax from "gsap";

export default class ParallaxElement extends Component {

	constructor(props) {
		super(props);
		this.state = {
			positionFromTop: 0
		};

		this.height = this.props.height;
		console.log(this.height);
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {
		window.addEventListener("scroll", this.updatePosition);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.updatePosition);
	}

	updatePosition = () => {
		let offset = document.documentElement.scrollTop;
		this.setState({ positionFromTop: offset });
		// this.animateBackgroundColor(this.bgLayer);
	};

	animateBackgroundColor = () => {
		if (this.state.positionFromTop > 1000) `rgb(0, 0, 0)`;
		let blueValue = Math.round(255 - (this.state.positionFromTop * 0.25));
		return `rgb(0, 0, ${blueValue})`;
	};

	render() {

		let color = this.animateBackgroundColor();

		let layers = [
			{name: "background", 	initialPosition: 0, modifier: 1.0, viewportTopOffset: this.state.positionFromTop, img: "", color: color},
			{name: "soncek", 		initialPosition: 0, modifier: 1.2, viewportTopOffset: this.state.positionFromTop, img: imageParallaxSoncek},
			{name: "farmidlands", 	initialPosition: 0, modifier: 0.5, viewportTopOffset: this.state.positionFromTop, img: imageParallaxFarmidlands},
			{name: "midlands", 		initialPosition: 0, modifier: 0.3, viewportTopOffset: this.state.positionFromTop, img: imageParallaxMidlands},
			{name: "foreground", 	initialPosition: 0, modifier: 0.1, viewportTopOffset: this.state.positionFromTop, img: imageParallaxForeground}
		];

		return (
			<div id={"parallax-container"} style={{ height: this.props.height}}>
				{layers.map(function(layerProps, index){
					return <ParallaxLayer {...layerProps} key={index} />;
				})}
			</div>
		);
	}
}