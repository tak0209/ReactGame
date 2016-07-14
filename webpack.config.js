var path = require('path');
var webpack = require('webpack');

//var commonPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    //entry: "./app/index.tsx",
    entry: {
        index: './app/index.tsx'

    },
    output: {
        path: path.join(__dirname, '/app/bin/'),
        filename: "[name].js",
        publicPath: "/bin/"                                 //webpack server result path
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
        //commonPlugin
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, '/app'),                    //dev server local path
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader'] },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ],

        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    },

    //**  Let webpack bundle the dependencies, uncomment to not bundle **/
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};