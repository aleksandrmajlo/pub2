const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    /*
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true 
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ]
            }

        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
    */
};
module.exports = (event, options) => {
    return conf;
}