module.exports = {
	entry: "./src/app.js",
	output: {
		path: './bin',
		publicPath: "/assets/",
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
		]
	},
};