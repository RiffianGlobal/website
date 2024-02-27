// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isProduction = process.env.NODE_ENV == 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


const config = {
    entry: './public/js/main.js',
    output: {
        filename: 'src/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: {
          keep: /\.git\//, //
        },
    },
    devServer: {
        host: '127.0.0.1',
        port: 3016,
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'src/css/[name].css'
        }),
        new CopyPlugin({
            patterns: [
              { from: "public/img", to: "src/img" },
            ],
            // options: {
            //   concurrency: 100,
            // },
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/template/index.html',
            options: {
                // navs: datas.navs,
                active: 'Home',
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
                generator: {
                    // filename: 'src/img/[hash][ext][query]'
                }
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                  exposes: 'jquery',
                },
              },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
