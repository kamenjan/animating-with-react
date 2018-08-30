import React, { Component } from "react"

import "./parallax.scss"
import ParallaxLayer from "./ParallaxLayer/ParallaxLayer"

/* Import parallax images */
import imageParallaxBackground from "./images/background.png"
import imageParallaxSoncek from "./images/soncek.png"
import imageParallaxFarmidlands from "./images/farmidlandsparalax.png"
import imageParallaxMidlands from "./images/midlandsparalax.png"
import imageParallaxForeground from "./images/foregroundparalax.png"

/* TODO: Add propType validation to all my Components */

export default class ParallaxEffect extends Component {

	constructor(props) {
		super(props)
	}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.fromTop);
  }

	render() {
		let layers = [
			{
			  name: "background",
        initialPosition: 0,
        modifier: -0.1,
        viewportTopOffset: this.props.fromTop,
        img: imageParallaxBackground
      },
			{
			  name: "soncek",
        initialPosition: 0,
        modifier:  0.3,
        viewportTopOffset: this.props.fromTop,
        img: imageParallaxSoncek
      },
			{
			  name: "farmidlands",
        initialPosition: 0,
        modifier:  0.1,
        viewportTopOffset: this.props.fromTop,
        img: imageParallaxFarmidlands
      },
			{
			  name: "midlands",
        initialPosition: 0,
        modifier: -0.3,
        viewportTopOffset: this.props.fromTop,
        img: imageParallaxMidlands
      },
			{
			  name: "foreground",
        initialPosition: 0,
        modifier: -1.0,
        viewportTopOffset: this.props.fromTop,
        img: imageParallaxForeground
			}
		];

		return (
      <div>
        <div id={"parallax-container"} style={{ height: this.props.height }}>
          {layers.map( (layerProps, index) => <ParallaxLayer {...layerProps} key={index} /> )}
        </div>
        <div id={`other_content`}></div>
      </div>

		);
	}
}