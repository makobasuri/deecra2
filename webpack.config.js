const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
	  main: './public/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  devServer: {
	contentBase: './',
	hot: true,
	inline: true,
	watchOptions: {
	  ignored: /node_modules/
	}
  },
  plugins: [
	new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),
	new webpack.HotModuleReplacementPlugin()
  ]
};
