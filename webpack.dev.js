require('colors')
const fs = require('fs')
const path = require('path')
const pathContext = ['/api']
const proxyHost = '127.0.0.1:9999'
const mockPath = path.join(__dirname, './mock/map.config')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    port: 8080,
    open: false,
    host: 'localhost',
    compress: true,
    useLocalIp: false,
    contentBase: './dist',
    clientLogLevel: 'error',
    disableHostCheck: true,
    historyApiFallback: true,
    // overly: true,
    proxy: getProxyMaps()
  },
}

function getProxyMaps() {
  const maps = {}
  pathContext.forEach((item) => {
    maps[item] = {
      target: 'http://' + proxyHost,
      secure: false,
      changeOrigin: true,
      bypass(req, res) {
        if (fs.existsSync(mockPath)) {
          let map = fs.readFileSync(mockPath,'utf-8')
          map = map.replace(/\s*\/\/.*(?:\r|\n|$)/g, '').trim()
          if (map) {
            try {
              map = JSON.parse(map)
            } catch (e) {
              map = ''
              console.log (`Not match mock -> ${req.url}`.red)
            }
            for (let x in map) {
              if (req.url.indexOf(x) > -1) {
                console.log(`Match -> ${req.url}: `.green, path.join(__dirname, './mock', map[x]).replace(/\\/g, '/').green)
                res.sendFile(path.join(__dirname, './mock', map[x]))
              }
            }
          }
        }
      }
    }
  })
  return maps
}