import React, { Component } from "react";

// import { TimelineLite } from 'gsap';
import { TweenLite } from 'gsap';
// import SvgComponent from "./SvgComponent";
import Artboard from "./svg/testingsvgo.svg";

import _ from "lodash";

export default class Village extends Component {

	constructor(props) {
		super(props);
		this.state = {
			svgAnimationStyle: {}
		};

		this.citySvgRef = React.createRef();
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {
		// const svgElemetsIDs = () => [ 'truck-svg', 'inn', 'blacksmith' ];
		// const svgDomElements = ids => ids.map( id => document.getElementById(id));
		// const animationProps = () => ({ ease: Elastic.easeOut.config(1, 0.3), transform: "scale(0)" });

		const svgItems = this.citySvgRef.current.querySelector("#svg");

		const car1 = svgItems.querySelector("#car1");
		const car2 = svgItems.querySelector("#car2");

		const moveAlongCubicalXAxis = (length) => ({ x: length*Math.cos(Math.PI / 6), y: -length*Math.sin(Math.PI / 6) });
		const moveAlongCubicalYAxis = (length) => ({ x: length*Math.cos(Math.PI / 6), y: length*Math.sin(Math.PI / 6) });

		const animation = new TimelineLite({onComplete:function() { this.restart() }});

		animation
			.to(car1, 2, { ... moveAlongCubicalXAxis(450), ease: Power1.easeOut }, "start")
			.to(car2, 5, { ... moveAlongCubicalYAxis(1125), ease: Power1.none}, "start")
			.to(car1, 5, { ... moveAlongCubicalXAxis(1125), ease: Power1.easeIn}, "second")
			.set(car2, {clearProps:"x"}, "second")
			.set(car1, {clearProps:"x"}, "third")
			.to(car2, 2, { ... moveAlongCubicalYAxis(450), ease: Power1.easeOut }, "third")
			.to(car1, 5, { ... moveAlongCubicalXAxis(1125), ease: Power1.none}, "fourth")
			.to(car2, 5, { ... moveAlongCubicalYAxis(1125), ease: Power1.easeIn}, "fourth");

		// Play just the sought part of the animation
		// animation.seek("fourth");

		// Speed up animation
		animation.timeScale(4);
	}

	componentWillUnmount() {}

	componentWillUpdate() {}

	render() {
		return (
			<div id={"village-container"} ref={this.citySvgRef}>
				<div style={{width: '800px', height: '600px', overflow: 'hidden'}}>
					<Artboard id={"svg"} style={{ }} />
				</div>
			</div>
		);
	}
}