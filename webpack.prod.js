const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  output: {
    publicPath: './'
  },
  plugins: [new CleanWebpackPlugin(['dist'])]
}