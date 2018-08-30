import React, { Component } from "react";
import Lottie from 'react-lottie';
import * as animationData from './david.json';
import "./bodymovinAnimation.scss";

export default class BodymovinAnimation extends Component {

	constructor(props) {
		super(props);
		this.lottieRef = React.createRef();
	}

	componentDidMount() {
		/* NOTE:
		 * Set BodyMovins SVG container as a Component's class field so we can manipulate its style when
	 	 * and if needed. This should be fixed in react-lotti soon by adding style props to main component.
		 * See https://github.com/chenqingspring/react-lottie/pull/33 for more info */
		this.container = document.getElementById("bodymovin-container")
	}

	componentWillUnmount() {
		// this.container.removeChild(this.container.firstChild);
		// parent.removeChild(child);
		// console.log(this.lottieRef.current);
		// this.lottieRef.current.props.isStopped = true;
	}

	componentWillUpdate () {
		/* NOTE: There is a problem with BodyMovin animation controls
		 * Reach out to react-lottie dev team on github and ask for help
		 * https://github.com/chenqingspring/react-lottie  */
		// this.lottieRef.current.anim.play();

		let offset = this.props.fromTop
		if (offset > 0 && offset < 1150 ) {
			let left = (offset)
			this.container.style.left = `${left}px`
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
					ref={this.lottieRef} />
			</div>
		);
	}
}