import React, { Component } from "react";


import { Motion, spring } from "react-motion";

import styled, { keyframes } from 'styled-components';

export default class ReactMotionAnimation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	/* Triggered before component loads */
	componentWillMount() {}

	/* Triggered when component loads */
	componentDidMount() {

	}
	componentWillUnmount() {}

	componentWillUpdate () {

	}

	getInitialState = () => {
		return {open: false};
	};

	handleMouseDown = () =>	 {
		this.setState({open: !this.state.open});
	};

	handleTouchStart = (e) => {
		e.preventDefault();
		this.handleMouseDown();
	};

	render() {

		const Button = styled.button`
			  padding: 10px 15px;
			  background: black;
			  color: #8e7e7e;
			  box-shadow: none;
			  outline: none;
			  border: none;
			  cursor: pointer;
			  border-radius: 3px;
			  text-align: center;
			  margin: 0 auto;
			  display: table;
			  opacity: 0.6;
			  font-style: italic;
			  letter-spacing: 0.03em;
			  transition: 0.5s ease all;
			  &:hover {
				opacity: 1;
				transition: 0.5s ease all;
			  }
		`;

		const Slider = styled.div`
		  	width: 200px;
			padding: 20px;
			background: orangered;
			font-weight: bold;
			margin: 50px 100px;
			border-radius: 5px;
		`;

		return (
			<div id={"reactmotion-container"}>
				<div>
					<Button
						onMouseDown={this.handleMouseDown}
						onTouchStart={this.handleTouchStart}>
						Toggle
					</Button>

					<div>
						<Motion style={{x: spring(this.state.open ? 600 : 0)}}>
							{({x}) =>
								<Slider style={{
									WebkitTransform: `translate3d(${x}px, 0, 0)`,
									transform: `translate3d(${x}px, 0, 0)`,
								}} >{x}</Slider>
							}
						</Motion>
					</div>

					<div>
						<Motion style={{x: spring(this.state.open ? 600 : 0)}}>
							{({x}) =>
								<svg width={"1200px"} height={"70px"} viewBox={"0 0 1200 70"}>
									<circle
										className={"ball"}
										fill={"black"}
										cx={"45"}
										cy={"45"}
										r={"25"}
										style={{
											WebkitTransform: `translate3d(${x}px, 0, 0)`,
											transform: `translate3d(${x}px, 0, 0)`,
										}}
									/>
								</svg>
							}
						</Motion>
					</div>

					<div>
						<Motion style={{x: spring(this.state.open ? 600 : 0)}}>
							{({x}) =>
								<svg width={"600px"} height={"600px"} viewBox={"0 0 50 50"}>
									{/*<rect width={"100%"} height={"100%"} fill={"red"}/>*/}
									<g>
										<rect x={"30"} y={"5"} fill={"white"} stroke={"black"} width={"90"} height={"90"}/>
										<circle fill={"white"} stroke={"black"} cx={"180"} cy={"50"} r={"45"}/>
									</g>
									<g fill="none" opacity="1" stroke="black" strokeWidth="1">
										<path  fillRule="nonzero" d="M 50 0 h 100 v 100 l -50 50 h -100 v -100 l 50 -50 M 0 50 h 100 v 100 M 150 0 l -50 50"/>
										{/*<path stroke-dasharray="5,5"d="M 50 0 v 100 h 100 M 0 150 l 50 -50"/>*/}
									</g>
								</svg>
							}
						</Motion>
					</div>

				</div>
			</div>
		);
	}
}