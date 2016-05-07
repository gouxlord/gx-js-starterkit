var webpack = require('webpack');
var path = require('path');

var baseLoaders = require('./webpack.base.loaders');
var basePlugins = require('./webpack.base.plugins');

var config = {
    entry: [
        './src/router.js'
    ],
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            ...baseLoaders
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        ...basePlugins
    ]
};

module.exports = config;