var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
    //多入口
    entry:{
        'build':'./index.js',
        'vendor':['lodash','jquery']
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath: '/dist/',
        filename: '[name]-[chunkhash].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|sass|css)$/,  // pack sass and css files
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader", 
                    use: [
                    { 
                        loader: 'css-loader',
                        options:{
                            minimize: true //css压缩
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    'sass-loader'
                    ]
                })
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        port:7000,//端口
    },
    devtool: '#eval-source-map'

}

module.exports.plugins = (module.exports.plugins || []).concat([
    //设置变量
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    //压缩代码
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    //抽离css
    new ExtractTextPlugin({
        filename: 'css/[name]-[contenthash].css',
    }),
    //提取公共代码
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor', // 注意不要.js后缀
        chunks:['build','vendor','jquery']
    }),
    //生成默认的index.html
    new HtmlWebpackPlugin(), 
])
