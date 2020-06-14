const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'Termii',
    },
    module: {
        rules: [
          {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use: 'babel-loader',
          },
        ],
      },
      resolve: {
        extensions: ['.js'],
      },
}