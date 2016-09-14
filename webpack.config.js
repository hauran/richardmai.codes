'use strict';
const webpack = require('webpack')
const WebpackStripLoader = require('strip-loader')

let config = {
  entry:'./src/main.js',
  output:{
    path:'./',
    filename:'index.js'
  },
  devServer:{
    inline:true,
    port:3335
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel',
        query: {
          presets:['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /react-icons\/(.)*(.js)$/,
        loader: 'babel',
        query: {
          presets:['es2015', 'react', 'stage-2']
        }
      },
      {test: /\.(jpe?g|png|gif)$/i, loader: 'url?limit=8192!img?progressive=true' }, //inline data url under 8k, converts to jpg and gifs to progressive
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=8192&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=8192&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg$/, loader: 'svg-inline' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({React: "react"})
  ]
}


module.exports = config
