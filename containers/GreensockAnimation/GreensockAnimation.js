import React, { Component } from "react";


import { TimelineLite } from 'gsap';
import SvgImage from "./line.svg";

export default class GreensockAnimation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			svgAnimationStyle: {}
		};
		this.tl = new TimelineLite();
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {

		this.path = document.getElementById("test-svg").querySelector("path");
		this.tl.to(this.path, 100, {strokeDashoffset:0});
		this.tl.pause();

		let pathLength = this.path.getTotalLength();

		let style = {
			strokeDasharray: pathLength,
			strokeDashoffset: pathLength,
			width: 400,
			display: "block",
			margin: "0 auto 0 auto"
		};

		this.setState({
			svgAnimationStyle: style
		});
	}

	componentWillUnmount() {}

	componentWillUpdate () {
		let offset = this.props.fromTop;
		if (offset < 350 ) return this.tl.progress(0);
		let position = ((offset - 350) / 350) * 0.4;
		this.tl.progress(position);
	}

	render() {
		return (
			<div id={"greensock-container"}>
				<SvgImage id={"test-svg"} style={this.state.svgAnimationStyle}/>
			</div>
		);
	}
}