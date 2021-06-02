const path = require('path');

const contentPath = path.resolve(__dirname, 'public')

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: contentPath,
        compress: true,
        port: 9000,
    },
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: contentPath,
    },
};