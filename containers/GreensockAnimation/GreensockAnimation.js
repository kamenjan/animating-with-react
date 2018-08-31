import React, { Component } from "react";
import { TimelineLite } from 'gsap';
import SvgImage from "./line.svg";

export default class GreensockAnimation extends Component {

	constructor(props) {
		super(props);
		this.tl = new TimelineLite();

    this.lineRef = React.createRef()
		this.animationElements = {}
	}

	componentDidMount() {
    const line = this.lineRef.current.querySelector("#line")
    const lineLength = line.getTotalLength()
    this.tl.set(line, {strokeDasharray: lineLength})
			.from(line, 100, {strokeDashoffset: lineLength})
		// this.tl.pause() // To traverse timeline using tl.progress() first pause it
	}


	/* NOTE: I can check clients viewport position and use it to manipulate transition progress  */
	componentWillUpdate () {
		let offset = this.props.fromTop
		if (offset < 350 ) return this.tl.progress(0)
		let position = ((offset - 350) / 350) * 0.4
		// this.tl.progress(position)
	}

	render() {

    const style = {
      strokeDasharray: 0,
      strokeDashoffset: 0,
      width: 400,
      display: "block",
      margin: "0 auto 0 auto",
      paddingTop: "300px"
    }

		return (
			<div id={"greensock-container"} ref={this.lineRef}>
				<SvgImage id={"line-svg"} style={style}/>
			</div>
		);
	}
}