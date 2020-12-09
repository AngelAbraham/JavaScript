const HtmlWebPackPlugin = require('html-webpack-plugin');

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
                test:/\.html$/i,
                loader: 'html-loader',
                options:{
                    attributes:false,
                },
         