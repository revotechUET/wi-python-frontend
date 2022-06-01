const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackDeployPlugin = require('html-webpack-deploy-plugin');

module.exports = {
    entry: path.join(__dirname, 'src'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        sources: false,
                    }
                }],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|ttf|svg|woff2)$/, use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/' //define the output of the file (relative path to the workdir)
                    }
                    // options: {
                    //     name: '[name].[ext]',
                    //     outputPath: '../../img/'
                    // }
                }
            }
        ]
    },
    //fix bug cannot resolve  'fs'
    // node: {
    //     fs: "empty"
    // },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new HtmlWebpackDeployPlugin({
            append: false,
            assets: {
                copy: [
                    { from: './public/assets', to: '../assets' },
                    { from: './public/bower_components', to: '../bower_components' },
                    { from: './public/sound', to: '../sound' },
                ],
            },
            packages: {
                '@revotechuet/misc-component': {
                    copy: [{ from: 'dist/misc-components.js', to: 'misc-components.js' }],
                    scripts: 'misc-components.js'
                },
            }
        })
    ],
    devtool: 'source-map',
    mode: 'development'
};