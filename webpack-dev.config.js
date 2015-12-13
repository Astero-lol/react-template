var path = require("path");
var webpack = require("webpack");
var definePlugin = new webpack.DefinePlugin({
    "NODE_ENV": JSON.stringify("development")
});

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./src/home"
    ],

    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/dist/"
    },
    plugins: [
        definePlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.(png|jpe?g|gif)$/, loader: "url?limit=5000" },
            { test: /\.(eot|ttf|svg|woff|woff2)$/, loader: "file" },
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.styl$/,
                loader: "style-loader!css-loader!stylus-loader?paths=node_modules"
            },
            {
                test: /\.jsx?$/,
                loaders: ["react-hot", "babel"],
                include: path.join(__dirname, "src"),
                exclude: /node_modules/
            }
        ]
    }
};
