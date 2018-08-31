import React, {Component} from "react"
import {Redirect} from 'react-router'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {TransitionGroup, Transition} from 'react-transition-group'

import PropTypes from "prop-types"
import history from 'services/history'

import FirstScene from "./scenes/FirstScene/FirstScene"
import SecondScene from "./scenes/SecondScene/SecondScene"
import ThirdScene from "./scenes/ThirdScene/ThirdScene"

export default class TransitionAnimation extends Component {

  constructor() {
    super()
    this.state = {
      path: "/",
    }
  }

  /* TODO: Define routes/scenes the proper way */
  links = () => [
    {path: "/", component: FirstScene},
    {path: "/SecondScene", component: SecondScene},
    {path: "/ThirdScene", component: ThirdScene}
  ]

  render() {
    return (
      <BrowserRouter>
        <div id={`desktop-wrapper`}>
          <section id={`nav-menu`}>
            <span><Link to="/">First Scene</Link></span>
            <span><Link to="/about-us">Second Scene</Link></span>
            <span><Link to="/work">Third Scene</Link></span>
          </section>
          <Route path="/" render={(props) => (
            <TransitionGroup>
              <Transition
                // For transitions API to work, transition key has to be set and unique!
                key={props.location.key}
                mountOnEnter={false}
                unmountOnExit={false}
                timeout={2000}
                // I have state available in my transition components ...
                // onEntering={el => { console.log('entering', el) }}
                // onExit={el => { console.log('exit', el) }}
                // ... so do I really need these? Leave for reference and global changes
              >
                {state =>
                  <Switch location={props.location}>
                    <Route exact path="/" render={(props) => (
                      <SecondScene
                        { ... props}
                        transitionState={state}
                        transitionTimeout={1.2}
                      />
                    )}/>
                    <Route exact path="/second-scene" render={(props) => (
                      <FirstScene
                        { ... props}
                        transitionState={state}
                        transitionTimeout={1.2}
                      />
                    )}/>
                    <Route exact  path="/third-scene" render={(props) => (
                      <ThirdScene
                        { ... props}
                        transitionState={state}
                        transitionTimeout={0.2}
                      />
                    )}/>
                  </Switch>
                }
              </Transition>
            </TransitionGroup>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

TransitionAnimation.propTypes = {
  // transitionState: PropTypes.string,
  // transitionTimeout: PropTypes.number
};