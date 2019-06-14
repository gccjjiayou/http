const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
  const html = fs.readFileSync('test.html', 'utf-8')
  const img = fs.readFileSync('test.jpg')
  if(req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Connection': 'close'
    })
    res.end(html)
  } else {
    res.writeHead(200, {
      'Content-Type': 'image/jpg',
      'Connection': 'close'
    })
    res.end(img)
  }
}).listen(8080)