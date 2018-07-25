// needed for env variable import
require('dotenv').config();

// upload contents of /build directory directly to S3
var S3Plugin = require('webpack-s3-plugin');

const webpack = require('webpack');

// js minification
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: "./app/main.js",
	output: {
		path: './app/bundle',
		filename: 'bundle.js'
	},
	devServer: {
	  inline: true,
	  contentBase: './app',
	  port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file'
			},
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  loader: 'babel'
			},

			// Fone-Awesome Loaders
			{
				test: /\.css$/,
				loader: 'style!css?sourceMap'
			}, {
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			}, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	},
	plugins: [
    new S3Plugin({
      // Exclude uploading of html
      exclude: /.*\.html$/,
      // s3Options are required
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      },
      s3UploadOptions: {
        Bucket: 'www.jistdesign.com'
      }
    }),
		new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
		new webpack.DefinePlugin({
  		'process.env.NODE_ENV': JSON.stringify('production')
		})
  ]
};
