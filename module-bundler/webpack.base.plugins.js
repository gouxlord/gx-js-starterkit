var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    new CopyWebpackPlugin([
        { from: 'src/static'}
    ]),
    new ExtractTextPlugin("styles.css")
];