const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.module\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true, // автоматически для .module.css файлов
                                localIdentName:
                                    '[name]__[local]--[hash:base64:5]' // формат имен
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: 'node_modules',
            failOnError: false
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
        // new Dotenv()
    ],
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.css',
            '.scss',
            '.png',
            '.svg',
            '.jpg'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        static: path.join(__dirname, './dist'),
        compress: true,
        historyApiFallback: true,
        port: 8080,
        hot: true
    }
};
