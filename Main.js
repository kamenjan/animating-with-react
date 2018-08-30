import React, { Component } from "react"
import { Router, Switch, Route } from 'react-router-dom'
import history from 'services/history'
import "./global.scss"
/* I'm using lodash to throttle scroll event listener */
import _ from 'lodash'

import Menu from "./components/Menu/Menu"

import ParallaxEffect from "./containers/ParallaxEffect/ParallaxEffect"
import GreensockAnimation from "./containers/GreensockAnimation/GreensockAnimation"
import BodymovinAnimation from "./containers/BodymovinAnimation/BodymovinAnimation"
import ReactMotionAnimation from "./containers/ReactMotionAnimation/ReactMotionAnimation"
import TransitionAnimation from "./containers/TransitionAnimation/TransitionAnimation"
import SvgAnimation from "./containers/SvgAnimation/SvgAnimation"
import PLPAnimation from "./containers/SvgAnimation/PLP/PLPAnimation"
import Slovenia from "./containers/SvgAnimation/Slovenia/Slovenia"


export default class Main extends Component {

	constructor() {
		super();
		this.state = {
			fromTop: 0,
			width: window.innerWidth
		};

		this.routes = [
			{ component: ParallaxEffect, exact: false, path: `/` }, // Default path
			{ component: GreensockAnimation, exact: false, path: `/${GreensockAnimation.name}` },
      { component: BodymovinAnimation, exact: false, path: `/${BodymovinAnimation.name}` },
      { component: ReactMotionAnimation, exact: false, path: `/${ReactMotionAnimation.name}` }
		]
	}

	componentDidMount() {
		/* This is an example of throttling event polling using lodash */
		// window.addEventListener('scroll', _.throttle(this.updateOnScroll, 20));
		window.addEventListener("scroll", this.updateOnScroll)
		window.addEventListener('resize', this.updateOnResize)
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.updateOnScroll)
		window.removeEventListener('resize', this.updateOnResize)
	}

	updateOnScroll = () => {
		const documentElement = document.scrollingElement || document.documentElement
		/* NOTE: Turned off, because it causes some scrolling bugs when used with react motion */
		this.setState({fromTop: documentElement.scrollTop})
	};

	updateOnResize = () => {
		this.setState({ width: window.innerWidth })
	};

	render() {
		return (
			<Router history={history}>
				<div id={"app-container"}>
					<Menu routes={this.routes} />
					<Switch>
            {this.routes.map((route, i) =>
              <Route exact path={route.path} key={i} render={ (props) => (
                React.createElement(route.component, { ... props, fromTop:this.state.fromTop, height:1038  })
							)}/>
            )}
						{/*<Route path="/8" component={SvgAnimation} />*/}
						{/*<Route path="/1" component={PLPAnimation} />*/}
						{/*<Route path="/6" component={TransitionAnimation} />*/}
						{/*<Route path="/7" component={Slovenia} />*/}
					</Switch>
				</div>
			</Router>
		);
	}



}