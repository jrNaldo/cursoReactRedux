const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './app.js'
  },
  devServer: {
    static: {
        directory: path.join(__dirname, './public')
    },
    compress: true,
    port: 8080
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.jsx', '.tsx']
  },
  module: {
    rules: [{
        test: /.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
    },{
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: 'file'
    }]
  }
};