const files = require.context('.', false, /\.js$/)
const api = {}

files.keys().forEach(function (fileName) {
  if (fileName === './index.js') return
  api[fileName.replace(/(\.\/|\.js)/g, '')] = files(fileName).default
})

module.exports = api