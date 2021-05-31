const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins: [
        new CleanWebpackPlugin(),    
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: '3000',
        hot: true
    },
};
