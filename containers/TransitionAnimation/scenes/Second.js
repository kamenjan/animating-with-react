import React, { Component } from "react";

export default class SecondComponent extends Component {

	constructor() {
		super();
	}


	render() {
		return (
			<div className="page">
				<h1>Second</h1>
				<p>Hello from the second page!</p>
			</div>
		)
	}
}