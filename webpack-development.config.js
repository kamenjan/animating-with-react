const webpack = require('webpack');
let baseConfig = require('./webpack.config.js');

const path = require("path");

baseConfig.devtool = 'source-map';

let lessLoader = {
	test: /\.less$/,
	use: [{
		loader: "style-loader" // creates style nodes from JS strings
	}, {
		loader: "css-loader", // translates CSS into CommonJS
		options: {
			sourceMap: true
		}
	}, {
		loader: "less-loader", // compiles Less to CSS
		options: {
			sourceMap: true
		}
	}]
};

let cssLoader = {
	test: /\.css$/,
	use: [{
		loader: "style-loader" // creates style nodes from JS strings
	}, {
		loader: "css-loader", // translates CSS into CommonJS
		options: {
			sourceMap: true
		}
	}]
};

baseConfig.module.rules.push(cssLoader);
baseConfig.module.rules.push(lessLoader);

baseConfig.plugins.push(
	new webpack.DefinePlugin({
		ENV: JSON.stringify("development")
	}),
);

module.exports = baseConfig;