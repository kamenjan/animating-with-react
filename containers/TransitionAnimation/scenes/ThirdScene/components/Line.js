import React, { Component } from 'react';
// import "./parallaxLayer.scss";

const Line = (props) => {

  let style = {
    width: `0px`,
    height: `100px`,
    border: `5px solid black`
    // transform: `translate3d(0px, ${Math.round(initialPosition + (viewportTopOffset * modifier))}px, 0px)`
  }

  return(
    <div className={`${name}`} style={{...style}} ></div>
  )
};

export default Line;