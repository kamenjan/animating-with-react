import React, { Component } from "react";

import "./parallax.css";
import ParallaxLayer from "./ParallaxLayer/ParallaxLayer"

// import parallax images
import imageParallaxBackground from "static/background.png";
import imageParallaxSoncek from "static/soncek.png";
import imageParallaxFarmidlands from "static/farmidlandsparalax.png";
import imageParallaxMidlands from "static/midlandsparalax.png";
import imageParallaxForeground from "static/foregroundparalax.png";

export default class ParallaxElement extends Component {

	constructor(props) {
		super(props);
		this.state = {
			positionFromTop: 0
		};
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
	};

	render() {

		let layers = [
			{initialPosition: 0, modifier: 0.9, viewportTopOffset: this.state.positionFromTop, img: imageParallaxBackground},
			{initialPosition: 0, modifier: 0.9, viewportTopOffset: this.state.positionFromTop, img: imageParallaxSoncek},
			{initialPosition: 0, modifier: 0.5, viewportTopOffset: this.state.positionFromTop, img: imageParallaxFarmidlands},
			{initialPosition: 0, modifier: 0.3, viewportTopOffset: this.state.positionFromTop, img: imageParallaxMidlands},
			{initialPosition: 0, modifier: 0.1, viewportTopOffset: this.state.positionFromTop, img: imageParallaxForeground}
		];

		return (
			<div id={"parallax-container"}>
				{layers.map(function(layerProps, index){
					return <ParallaxLayer {...layerProps} key={index} />;
				})}
			</div>
		);
	}
}