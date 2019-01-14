const path = require('path');

module.exports = {
    //entry: path.join(__dirname, 'src', 'index.js'),
    entry: path.join(__dirname, 'src'),
    output: {
        filename: 'app.js',
        //path: path.resolve(__dirname, 'public')
        path: path.join(__dirname, 'public', 'js'),
        // publicPath: './public/assets'
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
                        minimize: true
                    }
                }],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/, use: {
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
    node: {
        fs: "empty"
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css']
    },
    plugins: [],
    devtool: 'source-map',
    mode: 'development'
};