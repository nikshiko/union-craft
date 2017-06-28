let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({template: './public/index.html',
    filename: 'index.html',
    inject: 'body'});
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './public/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: ENV === 'production' ? 'source-map' : 'cheap-modul-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader:'babel-loader',
                exclude: /node_modules/

            }
        ]
    },
    devServer:{
        compress:true,
        historyApiFallback : true
},
    plugins: [HtmlWebpackPluginConfig]
};
