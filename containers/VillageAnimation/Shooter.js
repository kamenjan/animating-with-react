import React, { Component } from "react";

import { TimelineLite } from 'gsap';
import { TweenLite } from 'gsap';

import ShooterSvg from "./svg/shooter.svg";

import _ from "lodash";

export default class Shooter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			svgAnimationStyle: {}
		};

		this.shooterSvgRef = React.createRef();
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {
		const svgItems = this.shooterSvgRef.current.querySelector("#svg");
		this.shooterSvgRef.current.addEventListener('mousemove', this.mouseEvent);
	}

	componentWillUnmount() {}

	componentWillUpdate() {}

	mouseEvent = (event) => {
		const svg = this.shooterSvgRef.current.querySelector("#svg");
		const mouseCoordinates = {x: event.clientX, y: event.clientY};
		const playerCoordinates = {x: svg.querySelector("#player").getBoundingClientRect().x, y: svg.querySelector("#player").getBoundingClientRect().y};
		const angleDeg = Math.atan2(mouseCoordinates.y - playerCoordinates.y, mouseCoordinates.x - playerCoordinates.x) * 180 / Math.PI;
		TweenMax.to(svg.querySelector("#player"), 0, {rotation:angleDeg+90, transformOrigin:"50% 50%", ease:Linear.easeNone});
	};

	render() {
		return (
			<div>
				<div id={"shooter-container"} ref={this.shooterSvgRef} style={{width: '600px', height: '600px', overflow: 'hidden'}}>
					<ShooterSvg id={"svg"} />
				</div>
			</div>
		);
	}
}