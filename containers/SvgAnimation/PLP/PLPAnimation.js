import React, { Component } from "react";

import { TimelineLite } from 'gsap';
// import { TweenLite } from 'gsap';

// import SvgComponent from "./SvgComponent";
import PlpSvg from "./../svg/plp/plp.svg";

import _ from "lodash";
// import { getSvgItem } from "services/svgHelper"
import { compose } from "services/functional"

export default class PLPAnimation extends Component {

	constructor(props) {
		super(props);
		this.plpSvgRef = React.createRef();
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {

		// Util functions (compose style)
		const getSvgById = id => this.plpSvgRef.current.querySelector(id);
		const domToElementsObject = attribute => domElement => domElement.querySelectorAll(attribute);
		const objectToArray = object => typeof object === 'object' ? Object.values(object) : {};
		const findItemById = id => array => array.filter(element => element.dataset.id === id)[0];
		// END util functions

		const svgItems = compose(
			getSvgById,
			domToElementsObject("[data-id]"),
			objectToArray
		)("#plp_svg");

		const P1 = findItemById('P1')(svgItems);
		const L = findItemById('L')(svgItems);
		const P2 = findItemById('P2')(svgItems);

		const moveAlongYAxis = (length) => ({ y: length });
		const moveAlongCubicalXAxis = (length) => ({ x: length*Math.cos(Math.PI / 6), y: -length*Math.sin(Math.PI / 6) });
		const moveAlongCubicalYAxis = (length) => ({ x: length*Math.cos(Math.PI / 6), y: length*Math.sin(Math.PI / 6) });

		const animation = new TimelineLite();

		animation
			.to(P1, 2, { ... moveAlongCubicalXAxis(540), ease: Power1.none })
			.to(L, 2, { ... moveAlongYAxis(598), ease: Bounce.easeOut}, "-=1.5")
			.to(P2, 2, { ... moveAlongCubicalXAxis(-820), ease: Power1.none}, "-=1");

		// Play just the sought part of the animation
		// animation.seek("fourth");

		// Speed up animation
		// animation.timeScale(4);
	}

	componentWillUnmount() {}

	componentWillUpdate() {}

	render() {
		return (
			<div id={"plp_svg_container"} ref={this.plpSvgRef} style={{width: '800px', margin: '0 auto', overflow: 'hidden'}}>
				<PlpSvg id={"plp_svg"}/>
			</div>
		);
	}
}