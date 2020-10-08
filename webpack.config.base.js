const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: 'My App',
            template: "src/assets/index.html"
        }
    )],
    module: {
        rules: [
            {
                test: /\.css$/i,

            }
        ]
    }
}
