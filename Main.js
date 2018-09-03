import React, { Component } from "react"
import { BrowserRouter, Router, Route, } from 'react-router-dom'

/* I'm using lodash to throttle scroll event listener */
import _ from 'lodash'

import history from 'services/history'
import { transitionRoutes, decoupledRoutes } from "services/routes"

import "./global.scss"

import Menu from "./components/Menu/Menu"

import TransitionAnimation from "./containers/TransitionAnimation/TransitionAnimation"

export default class Main extends Component {

	constructor() {
    super()
    this.state = {
      fromTop: 0,
      width: window.innerWidth
    }
  }

	componentDidMount() {
		/* This is an example of throttling event polling using lodash */
		// window.addEventListener('scroll', _.throttle(this.updateOnScroll, 20))
		window.addEventListener("scroll", this.updateOnScroll)
		window.addEventListener('resize', this.updateOnResize)
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.updateOnScroll)
		window.removeEventListener('resize', this.updateOnResize)
	}

	updateOnScroll = () => {
		const documentEl = document.scrollingElement || document.documentElement
		/* NOTE: Known to cause some scrolling bugs when used with react motion */
		this.setState({fromTop: documentEl.scrollTop})
	}

  /* NOTE: Not hooked to anything */
	updateOnResize = () => {
		this.setState({ width: window.innerWidth })
	}


	render() {

	  const allRoutes = [ ... decoupledRoutes, ... transitionRoutes ]
    const addProps = (route) =>  ({
      ... route,
      ownProps: {
        ... route.ownProps,
        fromTop: this.state.fromTop,
        width: this.state.width
      }
    })


		return (
			<Router history={history}>
				<div id={"app-container"}>
          <Menu
            routes={allRoutes.map(({path, title}) => ({path, title}))}
          />
          <TransitionAnimation routes={transitionRoutes}/>
          {decoupledRoutes
            .map((route) => addProps(route))
            .map(({ component, exact, path, ownProps }, i) =>
              <Route exact={exact} path={path} key={i} render={ (props) => (
                React.createElement(component, {
                  ... props, ... ownProps
                })
              )}/>
          )}
        </div>
			</Router>
		)
	}
}