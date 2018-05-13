import React, { Component } from "react";

import "./global.scss";

import ParallaxElement from "./components/ParallaxElement/ParallaxElement";

export default class Main extends Component {

	constructor() {
		super();
		this.state = {};
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<div id={"app-container"}>
				<ParallaxElement />
				<div className={"generic-container"}></div>
			</div>
		);
	}
}