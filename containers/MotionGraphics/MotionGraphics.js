import React, { Component } from "react"

import Lottie from 'react-lottie'
import { TimelineLite, TweenLite } from 'gsap'

import * as animationData from './lottie/sheep'
import Arrow from "./svg/arrow.svg"

export default class MotionGraphics extends Component {

	constructor(props) {
		super(props)
    this.state = { sheep: { isStopped: false } }
    this.animation = {
		  timeline: new TimelineLite({onComplete:function() { this.restart().pause() }}),
      componentRef: React.createRef(),
      viewportHeight: this.props.height,
      viewportWidth: this.props.width,
      shutter: {
        widthPadding: Math.tan(30 * Math.PI/180) * this.props.height + this.props.width
      }
    }
	}

  componentDidMount() {

    const component = this.animation.componentRef.current
    const leftShutter = component.querySelector("#left")
    const viewportWidth = this.props.width

    const tanAlpha = Math.tan(30 * Math.PI/180)
    const viewportHeight = this.props.height
    const shutterPadding = tanAlpha * viewportHeight // Needed because skew effect indents the element

    const initialX = viewportWidth+shutterPadding+shutterPadding/2 // Out of the screen to the left

    this.animation.timeline
      .pause()
      .to(leftShutter, 1, {transform: `translateX(-${shutterPadding/2}px)`, ease: Power0.easeNone, onComplete: this.toggleSheep}, `step1`)
      .to(leftShutter, 0.5, {transform: `translateX(-${1300}px)`, ease: Power2.easeOut, onComplete: () => { this.animation.timeline.pause();}}, '+=0.0')
      .to(leftShutter, 0.5, {skewType:'simple', skewX: `-30deg`, ease: Power2.easeInOut, onComplete: () => { this.animation.timeline.pause();}}, 'step2')
      .to(leftShutter, 0.5, {skewType:'simple', skewX: `0deg`, ease: Power2.easeInOut}, 'step3')
      .to(leftShutter, 0.5, {x: `-${shutterPadding/2}px`, ease: Power2.easeInOut, onComplete: () => { this.toggleSheep();}}, '-=0.5')
      .to(leftShutter, 1, {x: `-${initialX}px`, ease: Power2.easeOut}, '-=0')
  }

  toggleNavigation = () => this.animation.timeline.play()
  toggleSheep = () => this.setState({ sheep: { ...this.state.sheep, isStopped: !this.state.sheep.isStopped} })

	render() {
	  /* GSAP animations */
    const tanAlpha = Math.tan(30 * Math.PI/180)
    const viewportHeight = this.props.height
    const shutterPadding = Math.round(tanAlpha * viewportHeight) // Needed because skew effect indents the element
    const viewportWidth = this.props.width
    const shutterWidth = viewportWidth+shutterPadding // Have to make it wider so it fills the screen when skewed
    const initialX = viewportWidth+shutterPadding+shutterPadding/2 // Out of the screen to the left

    /* Lottie animation */
    const lottieOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    const lottieSheepStyle = {
      display: 'inline-block',
      position: 'absolute',
      margin: '0',
      right: '0'
    }

    const lottieAttrs = {
      height: 400,
      width: 400,
      style: {...lottieSheepStyle},
      isStopped: this.state.sheep.isStopped
    }

    /* Initial CSS styles */
	  const containerStyle = {
	    position: 'fixed',
      width: '100%',
      height: '100%',
      boxShadow: `inset -15px 5px 297px -77px rgba(0,0,0,1)`
    }
	  const shutterStyle = {
	    zIndex: '100',
      display: 'inline-block',
      position: 'absolute',
      width: `${shutterWidth}px`,
      height: '100%',
      transform: `translateX(-${initialX}px)`,
      backgroundColor: '#45cce8',
      boxShadow: `20px 0 80px 20px rgba(0, 0, 0, 0.2), 0em 0 1em 0.1em rgba(0, 0, 0, 0.7)`,
      background: `linear-gradient(135deg, rgba(255,224,252,1) 0%,rgba(133,232,252,1) 36%,rgba(181,190,255,1) 100%)`
    }

    const navArrowStyle = {
	    zIndex: '101',
      display: 'inline-block',
      position: 'absolute',
      right: '0',
      top: '50%',
      width: '100px',
      height: '100px'
    }

		return (
      <div id={'motion-graphics'} style={{...containerStyle}} ref={this.animation.componentRef}>
        <Arrow style={{...navArrowStyle}} onClick={this.toggleNavigation}/>
        <div id={'left'} style={{...shutterStyle}}/>
        {this.state.sheep.isStopped ? <Lottie options={lottieOptions} {...lottieAttrs}/> : null }
      </div>
		)
	}
}