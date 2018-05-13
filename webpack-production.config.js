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

let cssLoader = {
	test: /\.css$/,
	use: [{
		loader: "style-loader" // creates style nodes from JS strings
	}, {
		loader: "css-loader"
	}]
};

baseConfig.module.rules.push(cssLoader);

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