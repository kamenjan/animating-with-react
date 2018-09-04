import React, { Component } from "react";

import { TimelineLite, TweenLite } from 'gsap'

import Line from './components/Line'

export default class ThirdScene extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {}

	componentWillUnmount() {}

	componentWillUpdate () {}

	render() {

    let lineCanvasStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    }


		return (
      <div id={"third-scene"} className={`section`}>
        <div id={`line-canvas`} style={{...lineCanvasStyle}}>
          <Line/>
        </div>
      </div>
		);
	}
}