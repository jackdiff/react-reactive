var path = require('path');
var webpack = require('webpack');

var srcPath = path.join(__dirname, 'sources');
var buildPath = path.join(__dirname, 'dist');


 module.exports = {
    entry: [path.join(srcPath, 'main.js')],
    output: {
        path: buildPath,
        filename: 'bundle.js',
    },
    resolve: {
        modules: [
            'scripts', 'node_modules',
        ],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ['@babel/react', '@babel/env']
                    }
                }
            }
        ]
    }
 };