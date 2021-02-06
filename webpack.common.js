
module.exports = {

    entry: {
        main: __dirname + "/src/index.js"
    },

    resolve: {
        extensions: [".jsx", ".js", '.json']
    },

    module: {

        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },

            {
                test: /\.(webp|svg)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "imgs",
                        publicPath: "./imgs/"
                    }
                }]
            },
            {
                test: /\.(jsx|js)$/i,
                use: ["babel-loader"]
            }
        ]
    },
}