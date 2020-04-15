module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    port: 8080,
    open: true,
    host: 'localhost',
    compress: true,
    useLocalIp: false,
    contentBase: './dist',
    clientLogLevel: 'error',
    disableHostCheck: true,
    historyApiFallback: true,
    // overly: true,
    proxy: {}
  },
}