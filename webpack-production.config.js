const webpack = require('webpack');
let baseConfig = require('./webpack.config.js');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// var WebpackStripLoader = require('strip-loader');
// Set up all the environment specific configuration components
// TODO: set this up with the newest version
// var stripLoader = {
// 	test: [/\.js$/, /\.es6$/],
// 	exclude: /node_modules/,
// 	loader: WebpackStripLoader.loader('console.log')
// };

// TODO: In production, certain assets should be extracted using plugins for better performance
let sassLoader = {
	test: /\.scss$/,
	use: [{
		loader: "style-loader"
	}, {
		loader: "css-loader"
	}, {
		loader: "sass-loader"
	}]
};

let cssLoader = {
	test: /\.css$/,
	use: [{
		loader: "style-loader" // creates style nodes from JS strings
	}, {
		loader: "css-loader"
	}]
};

baseConfig.module.rules.push(cssLoader);
baseConfig.module.rules.push(sassLoader);

baseConfig.plugins.push(
	new webpack.DefinePlugin({
		ENV: JSON.stringify("production")
	})
);

baseConfig.plugins.push(
	new UglifyJSPlugin({
		// enforce: 'post',
		test: /\.js$/,
		exclude: /node_modules/,
		uglifyOptions: {
			ecma: 8,
			warnings: true
		}
	})
);

module.exports = baseConfig;