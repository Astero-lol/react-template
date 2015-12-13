var extractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");
var definePlugin = new webpack.DefinePlugin({
    "NODE_ENV": JSON.stringify("production")
});

module.exports = {
    vendor: [
        "react"
    ],
    entry: [
        "./src/home"
    ],
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist/",
        filename: "app.js"
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.(png|jpe?g|gif)$/, loader: "url?limit=10000" },
            { test: /\.(eot|ttf|svg|woff|woff2)$/, loader: "file" },
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.styl$/,
                loaders: [
                    "style",
                    extractTextPlugin.extract(),
                    "css",
                    "stylus?paths=node_modules"
                ]
            },
            {
                test: /\.jsx?$/,
                loaders: ["react-hot", "babel"],
                include: path.join(__dirname, "src"),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new extractTextPlugin("app.css"),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendors.js"),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        definePlugin
    ]
};
