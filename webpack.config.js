module.exports = {
	entry: "./app/main.js",
	output: {
		path: './app',
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
			  test: /\.js$/,
			  exclude: /node_modules/,
			  loader: 'babel'
			}
		]
	},
};