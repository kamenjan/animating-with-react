import GreensockAnimation
  from "../containers/GreensockAnimation/GreensockAnimation"

import ReactMotionAnimation
  from "../containers/ReactMotionAnimation/ReactMotionAnimation"

import BodymovinAnimation
  from "../containers/BodymovinAnimation/BodymovinAnimation"

import ParallaxEffect
  from "../containers/ParallaxEffect/ParallaxEffect"

import SecondScene
  from "../containers/TransitionAnimation/scenes/SecondScene/SecondScene"

import FirstScene
  from "../containers/TransitionAnimation/scenes/FirstScene/FirstScene"

import ThirdScene
  from "../containers/TransitionAnimation/scenes/ThirdScene/ThirdScene"

import MotionGraphics
  from "../containers/MotionGraphics/MotionGraphics"

/* TODO: dynamically generate routes*/

module.exports = {
  decoupledRoutes: [
    {
      component: ParallaxEffect,
      title: ParallaxEffect.name,
      exact: true,
      path: `/${ParallaxEffect.name}`,
      ownProps: {
        transitionTimeout: 0,
        // fromTop: this.state.fromTop,
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
    },
    {
      component: MotionGraphics,
      title: MotionGraphics.name,
      exact: true,
      path: `/`,
      ownProps: {
        transitionTimeout: 0
      }
    }
  ],
  transitionRoutes: [
    {
      component: FirstScene,
      title: FirstScene.name,
      exact: true,
      path: `/transition/${FirstScene.name}`,
      ownProps: {
        transitionTimeout: 1
      }
    },
    {
      component: SecondScene,
      title: SecondScene.name,
      exact: true,
      path: `/transition/${SecondScene.name}`,
      ownProps: {
        transitionTimeout: 1
      }
    },
    {
      component: ThirdScene,
      title: ThirdScene.name,
      exact: true,
      path: `/transition/${ThirdScene.name}`,
      ownProps: {
        transitionTimeout: 1
      }
    }
  ]
}