const http = require('http')
const fs = require('fs')

var server = http.createServer((req, res) => {
  const html = fs.readFileSync('test.html', 'utf-8')
  const host = req.headers.host
  console.log(host)
  if(req.url === '/') {
    if(host === 'a.test.com:8080') {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['id=123; max-age=10', 'username=bob; HttpOnly', 'password=123; domain=a.test.com'] 
      })
    }
    
    res.end(html)
  }
})
server.listen(8080)