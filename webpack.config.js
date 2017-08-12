var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/js/index.jsx'),
    output: {
    	filename: '[name].js',
	    path: path.resolve(__dirname, 'build')
    },
    module: {
	loaders: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                query: {
                      "presets": ["es2015", "react"],
                      "plugins": ["transform-object-rest-spread"]
                }
            },
        ]
    },
    plugins: [
       new htmlWebpackPlugin({
            title: 'react单页面应用'
        })
    ]
}
