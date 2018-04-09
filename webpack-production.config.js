const webpack = require('webpack');
let baseConfig = require('./webpack.config.js');

// var WebpackStripLoader = require('strip-loader');

// Set up all the environment specific configuration components
// TODO: set this up with the newest version
// var stripLoader = {
// 	test: [/\.js$/, /\.es6$/],
// 	exclude: /node_modules/,
// 	loader: WebpackStripLoader.loader('console.log')
// };


let lessLoader = {
	test: /\.less$/,
	use: [{
		loader: "style-loader" // creates style nodes from JS strings
	}, {
		loader: "css-loader"
	}, {
		loader: "less-loader"
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

let uglifier = {
	enforce: 'post',
	test: /\.js$/,
	use: {
		loader: 'uglify-loader'
	}
};

baseConfig.module.rules.push(cssLoader);
baseConfig.module.rules.push(lessLoader);
baseConfig.module.rules.push(uglifier);

baseConfig.plugins.push(
	new webpack.DefinePlugin({
		ENV: JSON.stringify("production")
	}),
);

module.exports = baseConfig;