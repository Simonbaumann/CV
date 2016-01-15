
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: ["expose?jQuery!jquery", "bootstrap", "bootstrap.min.css", "wow.min.js",
                 "script!jquery.bootstrap-autohidingnavbar.js", "webpack/hot/only-dev-server",
				 "webpack-dev-server/client?http://localhost:8080"],
        script: "./src/script.js"
    },
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js" 
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
            { test: /\.(jpe?g|gif|svg)$/i,
              loaders: [
                 'url-loader?limit?100000'
              ]
            },
            { test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader: "file" },
            { test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader: "url-loader?limit=10000&mimetype=image/svg+xml"},
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            WOW: "wow.min.js"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.optimize.UglifyJsPlugin({compress: { warnings: false}}),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ],
    devServer: {
        contentBase: "./dist"
    },
    resolve: {
        modulesDirectories: ["node_modules", "node_modules/bootstrap/dist/css",
                             "src/assets/js", "bower_components", "bower_components/wow/dist",
                             "bower_components/bootstrap-autohidingnavbar/dist"],
        extensions: ["", ".webpack.js", ".web.js", ".js", ".css", ".min.css"]
    },
    devtool: 'source-map'
};

// FAIRE UN FICHIER VENDOR QUI REQUIRE TOUT LES FICHIERS JS (LIBRAIRIES) + PLUSIEURS ENTRY