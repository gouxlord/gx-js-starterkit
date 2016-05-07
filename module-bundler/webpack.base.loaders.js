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
    { test: /\.css$/, loader: "style-loader!css-loader?modules" },
]