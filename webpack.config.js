'use strict';
const webpack = require('webpack')
const WebpackStripLoader = require('strip-loader')

const envs = {
  EPIQUERY_ROOT:  JSON.stringify(process.env.EPIQUERY_ROOT || 'https://services-internal.glgresearch.com/epiquery'),
}

let config = {
  entry:'./src/main.js',
  output:{
    path:'./',
    filename:'index.js'
  },
  devServer:{
    inline:true,
    port:3334
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
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=8192!img?progressive=true' }, //inline data url under 8k, converts to jpg and gifs to progressive
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=8192&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=8192&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=8192&mimetype=image/svg+xml" },
    ]
  },
  plugins: [
    new webpack.DefinePlugin(envs),
    new webpack.ProvidePlugin({
        React: "react"
    })
  ]
}

if(process.env.NODE_ENV=='production'){
  console.log('PRODUCTION ENV')
  config.devtool = 'source-map'
}


module.exports = config
