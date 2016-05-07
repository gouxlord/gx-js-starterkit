var webpack = require('webpack');
var path = require('path');

var baseLoaders = require('./webpack.base.loaders');
var basePlugins = require('./webpack.base.plugins');
var baseResolve = require('./webpack.base.resolve');

var config = {
    entry: [
        './src/router.js'
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: baseResolve,
    module: {
        loaders: [
            ...baseLoaders
        ]
    },
    plugins: [
        ...basePlugins
    ]
};

// Export such that calling require(./webpack.config.js)
// will return the config object.
module.exports = config;