var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    new CopyWebpackPlugin([
        { from: 'src/static'}
    ])
]