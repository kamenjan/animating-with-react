import React, { Component } from "react"
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom'
import {TransitionGroup, Transition} from 'react-transition-group'

import history from 'services/history'
import { transitionRoutes, decoupledRoutes } from "services/routes"

import "./global.scss"
/* I'm using lodash to throttle scroll event listener */
import _ from 'lodash'

import Menu from "./components/Menu/Menu"

import ParallaxEffect from "./containers/ParallaxEffect/ParallaxEffect"
import GreensockAnimation from "./containers/GreensockAnimation/GreensockAnimation"
import BodymovinAnimation from "./containers/BodymovinAnimation/BodymovinAnimation"
import ReactMotionAnimation from "./containers/ReactMotionAnimation/ReactMotionAnimation"

import FirstScene from "./containers/TransitionAnimation/scenes/FirstScene/FirstScene"
import SecondScene from "./containers/TransitionAnimation/scenes/SecondScene/SecondScene"

import TransitionAnimation from "./containers/TransitionAnimation/TransitionAnimation"
// import SvgAnimation from "./containers/SvgAnimation/SvgAnimation"
// import PLPAnimation from "./containers/SvgAnimation/PLP/PLPAnimation"
// import Slovenia from "./containers/SvgAnimation/Slovenia/Slovenia"


export default class Main extends Component {

	constructor() {
    super()
    this.state = {
      fromTop: 0,
      width: window.innerWidth
    }

    // this.routes = [ParallaxEffect, GreensockAnimation, BodymovinAnimation, ReactMotionAnimation]
  }

  // getTransitionRoutes
  // getDecoupledRoutes
	getRoutes = () => ([
    {
      component: ParallaxEffect,
      title: ParallaxEffect.name,
      exact: true,
      path: `/${ParallaxEffect.name}`,
      ownProps: {
        transitionTimeout: 0,
        fromTop: this.state.fromTop,
        height: 1038
      }
    },
    {
      component: GreensockAnimation,
      title: GreensockAnimation.name,
      exact: true,
      path: `/${GreensockAnimation.name}`,
      ownProps: {
        transitionTimeout: 0
      }
    },
    {
      component: BodymovinAnimation,
      title: BodymovinAnimation.name,
      exact: true,
      path: `/${BodymovinAnimation.name}`,
      ownProps: {
        transitionTimeout: 0
      }
    },
    {
      component: ReactMotionAnimation,
      title: ReactMotionAnimation.name,
      exact: true,
      path: `/${ReactMotionAnimation.name}`,
      ownProps: {
        transitionTimeout: 0
      }
    }
  ])

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
		const documentElement = document.scrollingElement || document.documentElement
		/* NOTE: Known to cause some scrolling bugs when used with react motion */
		this.setState({fromTop: documentElement.scrollTop})
	}

  /* NOTE: Not hooked to anything */
	updateOnResize = () => {
		this.setState({ width: window.innerWidth })
	}


	render() {
		return (
			<BrowserRouter>
				<div id={"app-container"}>

          <Menu routes={this.getRoutes().map(({path, title}) => ({path, title}))} />
          <section id={`nav-menu`}>
            <span><Link to="/transition/firstscene">First Scene</Link></span>
            <span><Link to="/transition/secondscene">Second Scene</Link></span>
            <span><Link to="/transition/thirdscene">Third Scene</Link></span>
          </section>

          <Route path="/transition" render={(props) => (
            <TransitionGroup>
              <Transition
                key={props.location.key}
                mountOnEnter={false}
                unmountOnExit={false}
                timeout={2000}
                // onEntering={el => { console.log('entering', el) }}
                // onExit={el => { console.log('exit', el) }}
              >
                {state =>
                  <Switch location={props.location}>
                    <Route exact path="/transition/firstscene" render={(props) => (
                      <FirstScene
                        { ... props}
                        transitionState={state}
                        transitionTimeout={1.2}
                      />
                    )}/>
                    <Route exact path="/transition/secondscene" render={(props) => (
                      <SecondScene
                        { ... props}
                        transitionState={state}
                        transitionTimeout={1.2}
                      />
                    )}/>
                  </Switch>
                }
              </Transition>
            </TransitionGroup>
          )}/>

          {decoupledRoutes.map(({ component, exact, path, ownProps }, i) =>
            <Route exact={exact} path={path} key={i} render={ (props) => (
              React.createElement(component, {
                ... props, ... ownProps
              })
            )}/>
          )}

        </div>
			</BrowserRouter>
		)
	}
}