var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            cacheDirectory: true,
            plugins: ['transform-runtime'],
            presets: ['es2015', 'react', 'stage-0']
        }
    },
    {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1!autoprefixer-loader!sass-loader')
    },
    {
        test: /\.(jpg|png)$/,
        loader: 'file-loader'
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];