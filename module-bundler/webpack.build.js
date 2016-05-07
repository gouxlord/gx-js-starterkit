var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};

module.exports = config;