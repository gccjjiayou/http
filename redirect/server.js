const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  console.log(req.url)
  if(req.url === '/') {
    // res.writeHead(301, {
    //   'Location': '/new'
    // })
    res.writeHead(200)
    res.end()
  }
  if(req.url === '/new') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    })
    res.end('<div>This is Content</div>')
  }
}).listen(8080)