const path = require("path");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, path.join("src", "index.tsx")),
    watch: true,
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /.*tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader"
                }]
            }
        ]
    }
};
