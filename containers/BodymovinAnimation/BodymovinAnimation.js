import React, { Component } from "react";


import Lottie from 'react-lottie';
// import ReactBodymovin from "react-bodymovin";

import * as animationData from './david.json';
// import animationData from "./david.json";


import "./bodymovinAnimation.scss";

export default class BodymovinAnimation extends Component {

	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.container;
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {
		/* Set BodyMovins SVG container as a class field so we can manipulate its style (this should be fixed in react-lotti soon by adding style props) */
		this.container = document.getElementById("bodymovin-container").querySelector("div");
		this.container.style.margin = "0 0 0 -20%";
	}

	componentWillUnmount() {}

	componentWillUpdate () {
		let offset = this.props.fromTop;
		if (offset > 450 && offset < 1600 ) {
			let leftMargin = (offset-450)/9.56 - 20;
			console.log(leftMargin);
			this.container.style.margin = `0 0 0 ${leftMargin}%`;
		}
	}

	render() {
		const bodymovinOptions = {
			loop: true,
			autoplay: false,
			prerender: false,
			animationData: animationData
		};

		return (
			<div id={"bodymovin-container"}>
				<Lottie
					options={bodymovinOptions}
					height={400}
					width={400}
					ref={this.ref} />
			</div>
		);
	}
}