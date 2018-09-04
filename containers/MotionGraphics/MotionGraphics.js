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


    const tanAlpha = Math.tan(30 * Math.PI/180)
    const b = this.props.height
    const shutterPadding = tanAlpha * b // Needed because skew effect indents the element

    // TweenLite.set(leftShutter, { x:`-${viewportWidth+shutterPadding+shutterPadding/2}px` })

    const animation = new TimelineLite()
    // animation.add(`start`, `+=${0}`)
    animation
      .to(leftShutter, 1, {x: `-${shutterPadding/2}px`}, `start`)
      .to(leftShutter, 1, {x: `-${viewportWidth+shutterPadding+shutterPadding/2}px`})

  }

  componentWillUnmount() {}

  componentWillUpdate () {}

  onePercentInPixles = ( hundredPercentInPixels ) => hundredPercentInPixels / 100

	render() {

    const tanAlpha = Math.tan(30 * Math.PI/180)
    const viewportHeight = this.props.height
    const shutterPadding = Math.round(tanAlpha * viewportHeight) // Needed because skew effect indents the element
    const viewportWidth = this.props.width

    const shutterWidth = viewportWidth+shutterPadding // Have to make it wider so it fills the screen when skewed
    const initialX = viewportWidth+shutterPadding+shutterPadding/2 // Out of the screen to the left


    console.log(`b=${viewportHeight}`)
    console.log(`tanAlpha=${tanAlpha}`)
    console.log(`a=${shutterPadding}`)

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
      width: `${shutterWidth}px`,
      height: '100%',
      // transform: `skew(-30deg)`,
      transform: `translateX(-${initialX}px) skew(-30deg)`,
      // left: `-${viewportWidth+shutterPadding+shutterPadding/2}px`, // far left position
      // left: `-${shutterPadding/2}px`, // far right position
      // backgroundColor: 'rgba(108, 205, 228, 1)', //45cce8
      backgroundColor: '#45cce8',
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