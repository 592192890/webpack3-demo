var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    //多入口
    entry:{
        'build':'./index.js',
        'vendor':['lodash']
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath: '/dist/',
        filename: '[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'

}

module.exports.plugins = (module.exports.plugins || []).concat([
    //设置变量
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    //压缩代码
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    //提取公共代码
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor', // 注意不要.js后缀
        chunks:['vendor']
    }),
    //生成默认的index.html
    new HtmlWebpackPlugin(), 
])