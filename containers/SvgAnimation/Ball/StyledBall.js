/* Example of stateless component */

import React, { Component } from 'react';

/* Testing "styled components" plugin. Report in README.md */
import styled, { keyframes } from 'styled-components';
import Svg from '../svg/ball/ball.svg';

const rotate360 = keyframes`
		0% {
			background: blue;
			transform: translateX(0);
		}
		50% {
			background: purple;
			transform: translateX(50px);
		}
		100% {
			background: red;
			transform: translateX(100px);
		}
	`;

const StyledBall = styled(Svg)`
		animation: ${rotate360} 2s 2s 3 alternate ease-in-out forwards;
		font-size: 32px;
	`;

export default StyledBall;