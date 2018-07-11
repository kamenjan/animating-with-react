import React, { Component } from "react";

import Lottie from 'react-lottie';

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
		/* HACK: Set BodyMovins SVG container as a Component's class field so we can manipulate its style when
		and if needed. This should be fixed in react-lotti soon by adding style props to main component.
		See https://github.com/chenqingspring/react-lottie/pull/33 for more info */
		this.container = document.getElementById("bodymovin-container").querySelector("div");
		this.container.style.margin = "0 0 0 -20%";
	}

	componentWillUnmount() {}

	componentWillUpdate () {

		/* TODO: There is a problem with BodyMovin animation controlls */
		/* Reach out to react-lottie dev team on github and ask for help */
		/* https://github.com/chenqingspring/react-lottie  */
		// this.ref.current.anim.start();

		let offset = this.props.fromTop;
		if (offset > 450 && offset < 1600 ) {
			let leftMargin = (offset-450)/9.56 - 20;
			this.container.style.margin = `0 0 0 ${leftMargin}%`;
		}
	}

	render() {
		const bodymovinOptions = {
			loop: true,
			autoplay: true,
			prerender: false,
			renderer: "svg",
			animationData: animationData
		};

		return (
			<div id={"bodymovin-container"}>
				<Lottie
					options={bodymovinOptions}
					height={400}
					width={400}
					isStopped={false}
					ref={this.ref} />
			</div>
		);
	}
}