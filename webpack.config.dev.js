const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/app/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
        }, {
        loader: "css-loader"
        }, {
        loader: "sass-loader",
        options: {
          includePaths: ["absolute/path/a", "absolute/path/b"]
        }
      }]
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': process.env.NODE_ENV || JSON.stringify('development'),
        'API_URL': process.env.API_URL || JSON.stringify('http://localhost:3000/api')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin( {
      filename: 'src/app/public/stylesheets/app.css',
      allChunks: true
    })
  ]
};

module.exports = config;
