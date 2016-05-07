var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
require('babel-plugin-transform-object-assign');

var config = {
    entry: [
        './src/router.js'
    ],

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/static'}
        ])
    ]
};

// Export such that calling require(./webpack.config.js)
// will return the config object.
module.exports = config;