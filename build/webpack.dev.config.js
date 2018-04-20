var path=require('path');
var merge=require('webpack-merge');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var baseConfig=require('./webpack.base.config.js')
//开发环境的热更新不支持chunkhash和contenthash
var webpackConfig=merge(baseConfig,{
    output:{
        path:path.resolve(__dirname,'../dist'),
        publicPath: '/',
        filename: '[name]-[hash].js'
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        port:7000,//端口
        contentBase: path.join(__dirname, "../dist")
    },
    plugins:[
        //抽离css
        new ExtractTextPlugin({
            filename: 'css/[name]-[hash].css',
        }),
    ]

})
module.exports=webpackConfig;
