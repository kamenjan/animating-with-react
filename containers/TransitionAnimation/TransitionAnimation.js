import React, {Component} from "react"
import {Redirect} from 'react-router'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {TransitionGroup, Transition} from 'react-transition-group'

import PropTypes from "prop-types"
import history from 'services/history'

import FirstScene from "./scenes/FirstScene/FirstScene"
import SecondScene from "./scenes/SecondScene/SecondScene"
import ThirdScene from "./scenes/ThirdScene/ThirdScene"
import GreensockAnimation from "../GreensockAnimation/GreensockAnimation";
import ReactMotionAnimation from "../ReactMotionAnimation/ReactMotionAnimation";
import ParallaxEffect from "../ParallaxEffect/ParallaxEffect";
import BodymovinAnimation from "../BodymovinAnimation/BodymovinAnimation";

import Menu from "../../components/Menu/Menu"

export default class TransitionAnimation extends Component {

  constructor() {
    super()
    this.state = {
      path: "/",
    }
  }

  getRoutes = () => ([
    {
      component: FirstScene,
      title: FirstScene.name,
      exact: true,
      path: `/`,
      ownProps: {
        transitionTimeout: 1
      }
    },
    {
      component: SecondScene,
      title: SecondScene.name,
      exact: true,
      path: `/TransitionAnimation/${SecondScene.name}`,
      ownProps: {
        transitionTimeout: 1
      }
    },
    {
      component: ThirdScene,
      title: ThirdScene.name,
      exact: true,
      path: `/TransitionAnimation/${ThirdScene.name}`,
      ownProps: {
        transitionTimeout: 1
      }
    }
  ])

  render() {
    const props = this.props;
    return (
      <div id={`transition-animation-wrapper`}>
        <section id={`nav-menu`}>
          <span><Link to="/TransitionAnimation">First Scene</Link></span>
          <span><Link to="/TransitionAnimation/SecondScene">Second Scene</Link></span>
          <span><Link to="/TransitionAnimation/ThirdScene">Third Scene</Link></span>
        </section>
          <TransitionGroup>
            <Transition
              key={this.props.location.key}
              mountOnEnter={false}
              unmountOnExit={false}
              timeout={1.2}
              // onEntering={el => { console.log('entering', el) }}
              // onExit={el => { console.log('exit', el) }}
            >
              {state =>
                <Switch location={this.props.location}>
                  <Route exact path="/TransitionAnimation" render={(props) => (
                    <FirstScene
                      { ... props}
                      transitionState={state}
                      transitionTimeout={1.2}
                    />
                  )}/>
                  <Route exact={true} path={`${this.props.match.path}/SecondScene`} render={(props) => (
                    <SecondScene
                      { ... props}
                      transitionState={state}
                      transitionTimeout={1.2}
                    />
                  )}/>
                  {/*{this.getRoutes().map(({ component, exact, path, ownProps }, i) =>*/}
                    {/*<Route exact={exact} path={path} key={i} render={ (props) => (*/}
                      {/*React.createElement(component, {*/}
                        {/*... props, ... ownProps,*/}
                        {/*transitionState: state*/}
                      {/*})*/}
                    {/*)}/>*/}
                  {/*)}*/}
                </Switch>
              }
            </Transition>
          </TransitionGroup>
      </div>
    );
  }
}

TransitionAnimation.propTypes = {
  // transitionState: PropTypes.string,
  // transitionTimeout: PropTypes.number
};