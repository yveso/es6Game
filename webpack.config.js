var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [ {
                test: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            }
        ]
    }
};