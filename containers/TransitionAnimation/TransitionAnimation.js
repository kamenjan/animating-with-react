import React, {Component} from "react"
import {Redirect} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import {TransitionGroup, Transition} from 'react-transition-group'

import PropTypes from "prop-types"

export default class TransitionAnimation extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Route path="/transition" render={(props) => (
        <TransitionGroup>
          <Transition
            key={props.location.key}
            mountOnEnter={false}
            unmountOnExit={false}
            timeout={2000}
          >
            {state =>
              <Switch location={props.location}>
                {this.props.routes.map(({ component, exact, path, ownProps }, i) =>
                  <Route exact={exact} path={path} key={i} render={ (props) => (
                    // NOTE: Find if there is a way to dynamically create components using JSX
                    React.createElement(component, {
                      ... props, ... ownProps,
                      transitionState: state
                    })
                  )}/>
                )}
              </Switch>
            }
          </Transition>
        </TransitionGroup>
      )}/>
    )
  }
}

TransitionAnimation.propTypes = {
  routes: PropTypes.array
};