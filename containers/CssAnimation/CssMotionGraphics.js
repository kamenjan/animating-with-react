import React, { Component } from "react"

import Shutter from "./Elements/Shutter/Shutter"
import Arrow from "./svg/arrow.svg"

export default class CssMotionGraphics extends Component {

	constructor(props) {
		super(props)
    this.state = { shutter: { show: false } }
	}

  componentDidMount() {}

  toggleMotion = () => {
    this.setState({ shutter: { show: !this.state.shutter.show } })
  }

	render() {

    /* Initial CSS styles */
	  const containerStyle = {
	    position: 'fixed',
      width: '100%',
      height: '100%',
      boxShadow: `inset -15px 5px 297px -77px rgba(0,0,0,1)`
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
      <div id={'css-motion-graphics'} style={{...containerStyle}}>
        <Arrow style={{...navArrowStyle}} onClick={this.toggleMotion}/>
        <Shutter show={this.state.shutter.show} />
      </div>
		)
	}
}