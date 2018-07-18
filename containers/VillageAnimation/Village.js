import React, { Component } from "react";

// import { TimelineLite } from 'gsap';
import { TweenLite } from 'gsap';
import BlacksmithSvg from "./svg/blacksmith.svg";
import InnSvg from "./svg/inn.svg";
import VillageSvg from "./svg/village.svg";

export default class Village extends Component {

	constructor(props) {
		super(props);
		this.state = {
			svgAnimationStyle: {}
		};
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {
		const svgElemetsIDs = () => [
			'inn',
			'blacksmith'
		];
		const svgDomElements = ids => ids.map( id => document.getElementById(id));
		const animationProps = () => ({
			ease: Elastic.easeOut.config(1, 0.3),
			transform: "scale(1)"
		});
		svgDomElements(svgElemetsIDs()).map( svg => TweenLite.to(svg, 3, animationProps()))
	}

	componentWillUnmount() {}
	componentWillUpdate() {}

	render() {
		return (
			<div id={"village-container"}>
				<BlacksmithSvg
					id={"blacksmith"}
					style={{
						// transform: `translate(400px, 400px) scale(0)`
						transform: `scale(0)`
					}}
				/>
				<InnSvg
					id={"inn"}
					style={{
						transform: `scale(0)`
					}}
				/>
				<VillageSvg
					id={"village"}
					style={{
						// transform: `scale(1)`
					}}
				/>
			</div>
		);
	}
}