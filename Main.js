import React, { Component } from "react";

import "./global.css";
import { TweenLite } from 'gsap';
import ParallaxLayer from "./components/ParallaxLayer/ParallaxLayer"

// import parallax image
import imageParallaxBackground from "./static/background.png";
import imageParallaxSoncek from "./static/soncek.png";
import imageParallaxFarmidlands from "./static/farmidlandsparalax.png";
import imageParallaxMidlands from "./static/midlandsparalax.png";
import imageParallaxForeground from "./static/foregroundparalax.png";

export default class Main extends Component {

	constructor() {
		super();
		super();
		this.state = {
			positionFromTop: 0
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
		window.addEventListener("scroll", this.updatePosition.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.updatePosition.bind(this));
	}

	updatePosition () {
		let offset = document.documentElement.scrollTop;
		this.setState({ positionFromTop: offset });
	}

	render() {

		return (
			<div id={"container"}>
				<ParallaxLayer
					initialTopPosition={0}
					modifier={1}
					viewportTopOffset={this.state.positionFromTop}
					img={imageParallaxBackground}
				/>
				<ParallaxLayer
					initialTopPosition={100}
					modifier={0.8}
					viewportTopOffset={this.state.positionFromTop}
					img={imageParallaxSoncek}
				/>
				<ParallaxLayer
					initialTopPosition={100}
					modifier={0.6}
					viewportTopOffset={this.state.positionFromTop}
					img={imageParallaxFarmidlands}
				/>
				<ParallaxLayer
					initialTopPosition={100}
					modifier={0.4}
					viewportTopOffset={this.state.positionFromTop}
					img={imageParallaxMidlands}
				/>
				<ParallaxLayer
					initialTopPosition={100}
					modifier={0.1}
					viewportTopOffset={this.state.positionFromTop}
					img={imageParallaxForeground}
				/>
				<div id={"main-area"} className={"parallax-element"}></div>

			</div>
		);
	}
}