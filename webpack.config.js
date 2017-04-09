var path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      NavBar: path.resolve(__dirname, './app/NavBar/index.js'),
      Main: path.resolve(__dirname, './app/Main/index.js'),
      PageContainer: path.resolve(__dirname, './app/PageContainer/index.js'),
      Pages: path.resolve(__dirname, './app/Pages/index.js'),
      FriendPage: path.resolve(__dirname, './app/Pages/FriendPage/index.js')
    },
    extensions: [
      '.js', '.jsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', ['es2015', { modules: false }]]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
