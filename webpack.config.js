const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            watch: true,
        },
        port: 3000,
        open: true,
        hot: true,
        liveReload: true,

        // Watch source files
        watchFiles: ['src/**/*'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/css',
                    to: 'css',
                },
            ],
        }),
    ],

    mode: 'development',
};
