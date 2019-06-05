const http = require('http')

var server = http.createServer(function(req, res) {
  console.log('request come', req.url)
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
  })
  res.end('123')
})
server.listen(8081)
console.log('server listening on 8081')