const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtrackPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode:'development',
    module:{
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use:[
                    MiniCssExtrackPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.html$/i,
                loader: 'html-loader',
                options:{
                    attributes:false,
                },
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'

        }),

        new MiniCssExtrackPlugin ({
            filename:'[name].css',
            ignoreOrder: false
        })
    ]
}