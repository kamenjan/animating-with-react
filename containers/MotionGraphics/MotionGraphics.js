import React, { Component } from "react"

import { TimelineLite, TweenLite } from 'gsap'
// import "./common.scss"

export default class MotionGraphics extends Component {

	constructor(props) {
		super(props)
    this.componentRef = React.createRef()
	}

  componentDidMount() {

	  const component = this.componentRef.current
    const leftShutter = component.querySelector("#left")

    const viewportWidth = this.props.width

    console.log(leftShutter);

    const tanAlpha = Math.tan(30 * Math.PI/180)
    const b = this.props.height
    const shutterPadding = tanAlpha * b // Needed because skew effect indents the element

    // left: `-${shutterPadding/2}px`, // far right position
    // left: `-${viewportWidth+shutterPadding+shutterPadding/2}px`, // far left position

    const animation = new TimelineLite()
    // animation.add(`start`, `+=${0}`)
    animation
      .to(leftShutter, 2, {left: `-${shutterPadding/2}px`}, `start`)
      .to(leftShutter, 2, {left: `-${viewportWidth+shutterPadding+shutterPadding/2}px`})

  }

  componentWillUnmount() {}

  componentWillUpdate () {}

  onePercentInPixles = ( hundredPercentInPixels ) => hundredPercentInPixels / 100

	render() {

    const tanAlpha = Math.tan(30 * Math.PI/180)
    const b = this.props.height
    const shutterPadding = tanAlpha * b // Needed because skew effect indents the element

    console.log(`b=${b}`)
    console.log(`tanAlpha=${tanAlpha}`)
    console.log(`a=${shutterPadding}`)

    console.log(shutterPadding)

    const viewportWidth = this.props.width

	  const containerStyle = {
	    position: 'fixed',
      width: '100%',
      height: '100%',
      boxShadow: `inset -15px 5px 297px -77px rgba(0,0,0,1)`
    }

	  const leftStyle = {
	    zIndex: '100',
      display: 'inline-block',
      position: 'absolute',
      width: `${viewportWidth+shutterPadding}px`,
      height: '100%',
      left: `-${viewportWidth+shutterPadding+shutterPadding/2}px`, // far left position
      // left: `-${shutterPadding/2}px`, // far right position
      backgroundColor: 'rgba(108, 205, 228, 1)',
      transform: 'skew(-30deg)'
    }

    /* NOTE: not in use anymore, here as an example of position attribute */
    const rightStyle = {
      display: 'inline-block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'blue'
    }

		return (
      <div id={'motion-graphics'} style={{...containerStyle}} ref={this.componentRef}>
        <div id={'left'} style={{...leftStyle}}></div>
        <span>arih</span><span> > </span>
      </div>
		)
	}
}