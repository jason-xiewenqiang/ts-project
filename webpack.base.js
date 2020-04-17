const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    filename: 'js/app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {loader: 'ts-loader'}
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './tpl/index.html')
    })
  ]
}