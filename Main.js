import React, { Component } from "react";

import { TimelineLite } from 'gsap';

import "./global.scss";
import SvgImage from "./test.svg";


import ParallaxElement from "./components/ParallaxElement/ParallaxElement";

export default class Main extends Component {

	constructor() {
		super();
		this.state = {
			svgAnimationStyle: {}
		};

		this.mainReference = React.createRef();
		this.tl = new TimelineLite();
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {
		window.addEventListener("scroll", this.updatePosition);

		this.path = this.mainReference.current.querySelector("path");
		this.tl.to(this.path, 10, {strokeDashoffset:0});
		this.tl.pause();

		let style = {
			strokeDasharray: 523,
			strokeDashoffset: 523
		};

		this.setState({
			svgAnimationStyle: style,
			positionFromTop: 0
		});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.updatePosition);
	}

	updatePosition = () => {
		let offset = document.documentElement.scrollTop;
		this.setState({ positionFromTop: offset });
		if (offset > 535) return;
		let position = offset / 535;
		this.tl.progress(position);
	};

	render() {
		return (
			<div id={"app-container"} ref={this.mainReference}>
				{/*<ParallaxElement height={1038} />*/}
				{/*This should be a container view. Using one container for SPA and multiple with react router for structured application*/}
				<div className={"generic-container"}>
					<SvgImage id={"test-svg"} style={this.state.svgAnimationStyle}/>
				</div>
			</div>
		);
	}
}