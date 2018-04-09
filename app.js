console.log(`Running application in ${ENV} mode`);

if (ENV === "production") {}

import React from "react";
import ReactDOM from "react-dom";

const app = document.getElementById("app");

// PROD:
// import Home from "scenes/home/Home";
// ReactDOM.render(<Home />, app);

// DEV test:
// import Main from "test/Main";
// ReactDOM.render(<Main />, app);

// DEV v1:
// import CoinList from "v1/CoinList";
// ReactDOM.render(<CoinList />, app);