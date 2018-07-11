import React, { Component } from "react";

import { TimelineLite } from 'gsap';

import "./global.scss";

// I'm using lodash to throttle scroll event listener
import _ from 'lodash';

import ParallaxElement from "./components/ParallaxElement/ParallaxElement";
import GreensockAnimation from "./containers/GreensockAnimation/GreensockAnimation";
import BodymovinAnimation from "./containers/BodymovinAnimation/BodymovinAnimation";

export default class Main extends Component {

	constructor() {
		super();
		this.state = {
			fromTop: 0
		}
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {
		// window.addEventListener('scroll', _.throttle(this.updateOnScroll, 80));
		window.addEventListener("scroll", this.updateOnScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.updateOnScroll);
	}

	updateOnScroll = () => {
		const documentElement = document.scrollingElement || document.documentElement;
		this.setState({fromTop: documentElement.scrollTop});
	};

	render() {

		return (
			<div id={"app-container"} ref={this.mainReference}>

				{/*Our custom parallax scroll element*/}
				<ParallaxElement height={1038} fromTop={this.state.fromTop} />

				{/*This should be a container view. Using one container for SPA and multiple with react router for structured application*/}
				<div className={"generic-container"}>

					{/*Our custom gsap animation element*/}
					<GreensockAnimation fromTop={this.state.fromTop}/>

					{/*Our custom gsap animation element*/}
					<BodymovinAnimation fromTop={this.state.fromTop}/>

				</div>
			</div>
		);
	}
}