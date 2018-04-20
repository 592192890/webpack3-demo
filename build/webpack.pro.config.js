var path=require('path');
var merge=require('webpack-merge');
var baseConfig=require('./webpack.base.config.js')
webpackConfig=merge(baseConfig,{})
module.exports=webpackConfig;