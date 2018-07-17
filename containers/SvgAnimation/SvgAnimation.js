import React, { Component } from "react";

import { TimelineLite } from 'gsap';

import SvgBasic from "./svg/basic.svg";
import StyledBall from "./Ball/StyledBall";

export default class SvgAnimation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			svgAnimationStyle: {}
		};
		// this.tl = new TimelineLite();
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {

	}

	componentWillUnmount() {}

	componentWillUpdate () {

	}

	render() {
		return (
			<div id={"svg-container"}>
				{/*<SvgBasic />*/}
				<StyledBall />
			</div>
		);
	}
}