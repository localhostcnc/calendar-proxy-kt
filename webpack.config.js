const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        //include: [srcDir, components],
        exclude: /node_modules/,
        loader: 'babel-loader',
  
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ],
  },
  resolve: {
    alias: {
      "styled-components": path.resolve(__dirname, "node_modules", "styled-components"),
    }
  }
};