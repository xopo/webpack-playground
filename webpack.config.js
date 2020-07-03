const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'none',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:  /\.(sa|sc|c)ss$/, // /\.css$/,
                use: [ 
                    'style-loader', // step 3 inject styles into DOM
                    'css-loader',  // step 2 convert css to commonjs
                    'sass-loader' // step 1 convert sass to css
                ]
            }
        ]
    }
}