import React, { Component } from "react";

import "./parallax.scss";
import ParallaxLayer from "./ParallaxLayer/ParallaxLayer"

// import parallax images
import imageParallaxBackground from "./images/background.png";
import imageParallaxSoncek from "./images/soncek.png";
import imageParallaxFarmidlands from "./images/farmidlandsparalax.png";
import imageParallaxMidlands from "./images/midlandsparalax.png";
import imageParallaxForeground from "./images/foregroundparalax.png";
import TweenMax from "gsap";

export default class ParallaxElement extends Component {

	constructor(props) {
		super(props);
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {}

	componentWillUpdate () {}

	componentWillUnmount() {}

	animateBackgroundColor = () => {
		if (this.props.fromTop > 1000) `rgb(0, 0, 0)`;
		let blueValue = Math.round(255 - (this.props.fromTop * 0.25));
		return `rgb(0, 0, ${blueValue})`;
	};

	render() {

		let color = this.animateBackgroundColor();

		let layers = [
			{name: "background", 	initialPosition: 0, modifier: 1.0, viewportTopOffset: this.props.fromTop, img: "", color: color},
			{name: "soncek", 		initialPosition: 0, modifier: 1.2, viewportTopOffset: this.props.fromTop, img: imageParallaxSoncek},
			{name: "farmidlands", 	initialPosition: 0, modifier: 0.5, viewportTopOffset: this.props.fromTop, img: imageParallaxFarmidlands},
			{name: "midlands", 		initialPosition: 0, modifier: 0.3, viewportTopOffset: this.props.fromTop, img: imageParallaxMidlands},
			{name: "foreground", 	initialPosition: 0, modifier: 0.1, viewportTopOffset: this.props.fromTop, img: imageParallaxForeground}
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