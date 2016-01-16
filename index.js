var http = require('http')
var assets = require('./assets.js')

var server = http.createServer(function (request, response) {
  console.log('Recibi un request ' + request.url)
  switch (request.url) {
    case '/':
      assets.serveStatic('index.html', function (err, content) {
        response.end(content)
      })
      break
    case '/app.js':
      assets.serveStatic('app.js', function (err, content) {
        response.end(content)
      })
      break
    case '/app.css':
      assets.serveStatic('app.css', function (err, content) {
        response.end(content)
      })
      break
    default:
      response.statusCode = 404
      response.end('No encontrado')
      break
  }
})

server.listen(3000, function () {
  console.log('Servidor iniciado. Escuchando en el puerto 3000')
})