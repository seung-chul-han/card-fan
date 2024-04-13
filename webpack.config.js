const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	devServer: {
		static: './dist',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'card fan',
		}),
	],
	output: {
		path: resolve(__dirname, 'dist'),
		filename: '[name].js',
		clean: true,
	},
};
