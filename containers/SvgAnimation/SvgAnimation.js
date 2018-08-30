import React, { Component } from "react";

// import { TimelineLite } from 'gsap';
import { TweenLite } from 'gsap';

// import SvgComponent from "./SvgComponent";
import PlpSvg from "./svg/plp/plp.svg";
import ExampleSvg from "./svg/tmp/MonSvgBlendModeAddedAfterSketch.svg"

import _ from "lodash";

export default class SvgAnimation extends Component {

	constructor(props) {
		super(props);
		this.citySvgRef = React.createRef();
	}

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

		/* Play just the sought part of the animation */
		// animation.seek("fourth");

		/* Speed up animation */
		// animation.timeScale(4);
	}

	render() {
		return (
			<div id={"svg-container"} ref={this.citySvgRef}>
				<div style={{width: '567px', height: '579px', overflow: 'hidden'}}>
					<ExampleSvg id={"svg"} style={{ }} />
					{/*<PlpSvg id={"svg"} style={{ }} />*/}
					{/*<StyledBall />*/}
				</div>
			</div>
		);
	}
}