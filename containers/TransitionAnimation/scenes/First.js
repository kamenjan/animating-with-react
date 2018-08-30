import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";

export default class First extends Component {

	constructor() {
		super();
	}

	componentDidMount () {
		console.log("first component did mount");
	}

	componentWillAppear(cb) {
		console.log("first component did appear");
		cb();
	}

	componentWillUnmount() {
		console.log(`First unmounted`);
	}


	render() {
		return (
			<div className="page">
				<h1>First</h1>
				<p>Hello from the first page!</p>
			</div>
		)
	}
}