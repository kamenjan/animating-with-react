/*
* Data Visualisation Example
*
* Data sources:
* 	http://pxweb.stat.si/pxweb/dialog/statfile1.asp
*	http://pxweb.stat.si/pxweb/Database/Regije/Regije.asp
*
* Visualisation library:
* 	D3 - https://github.com/d3/d3/wiki, https://www.npmjs.com/package/d3
*
* Workflow:
* 	1. fetch data from
*
* TMP DEV DOCS:
*
*/



import React, { Component } from "react";

// import { TimelineLite } from 'gsap';
import { TweenLite } from 'gsap';

// import SvgComponent from "./SvgComponent";
import SloveniaSvg from "./../svg/tmp/slovenia.svg";

export default class Slovenia extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// fetch("http://sistat.sebenik.com/?ma=1072930S&ti=&path=../Database/Dem_soc/10_kultura/90_Arhiv/06_10729_muzeji_galerije_kaz/&leto=all&statisti%c4%8dna_regija=all")
		// 	.then( response => {
		// 		console.log(response);
		// 		return response.json()
		// 	})
		// 	.then( response => {
		// 		// this.setState({ coins: response  });
		// 	})
		// 	.catch( error => {
		// 		console.log(error);
		// 	});
	}



	render() {
		return (
			<div id={"plp_slovenia_svg_container"} ref={this.svgRef}>
				<SloveniaSvg id={"slovenia"} style={{ }} />
				<div style={{width: '567px', height: '579px', overflow: 'hidden'}}>

				</div>
			</div>
		);
	}
}