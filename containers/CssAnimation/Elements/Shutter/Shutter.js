import React from 'react'
import PropTypes from "prop-types"
import {Motion, spring} from 'react-motion'

const Shutter = ({show}) => {

  const componentClasses = ['example-component']

  if (show) { componentClasses.push('show') }

  const shutterStyle = {
    zIndex: '100',
    display: 'inline-block',
    position: 'absolute',
    width: `100%`,
    height: '100%',
    backgroundColor: '#45cce8',
    boxShadow: `20px 0 80px 20px rgba(0, 0, 0, 0.2), 0em 0 1em 0.1em rgba(0, 0, 0, 0.7)`,
    background: `linear-gradient(135deg, rgba(255,224,252,1) 0%,rgba(133,232,252,1) 36%,rgba(181,190,255,1) 100%)`
  }

  return (
    <Motion
      defaultStyle={{
        x: -1300,
        // opacity: 0
      }}
      style={{
        x: spring(show ? 0 : -1300),
        // opacity: spring(show ? 1 : 0)
      }}
    >
      {style => (
        <div
          style={{
            transform: `translateX(${style.x}px)`,
            opacity: style.opacity,
            ... shutterStyle
          }}
        >
          mapping daily forecast...
        </div>
      )}
    </Motion>

  )
}

Shutter.defaultProps = {
  show: true
}

Shutter.propTypes = {
  show: PropTypes.bool.isRequired
}

export default Shutter