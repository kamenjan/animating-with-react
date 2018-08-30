import React, { Component } from "react";
import history from "../../services/history_transition";

import { Router, Route, Link, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import { TweenLite, TweenMax } from 'gsap';

import First from "./scenes/First";
import Second from "./scenes/Second";
import Third from "./scenes/Third";

import SolarSystem from "./scenes/SolarSystem";

export default class TransitionAnimation extends Component {

	constructor() {
		super();
		this.state = {
			show: false,
			entered: false,
		};
	}

	completeCall = target => {
		TweenLite.set(target, { clearProps: "position, width" });
	};

	render() {

		const { show } = this.state;

		return (
			<div>
				<div
					onClick={() => {
						this.setState(state => ({
							show: !state.show,
						}));
					}}
				>
					Toggle
				</div>

				<Transition
					in={show}
					timeout={{ enter: 900, exit: 900 }}
					unmountOnExit
					onEntering={node => {
						// do something when entering the component transition
					}}
					onEnter={node => {

					}}
				>
					{(status) => (
						<div>
							<h3>Transition status: {status}</h3>
							<SolarSystem id={"solar-system"} status={status} style={{ }} />
						</div>
					)}
				</Transition>
			</div>
		);
	}
}