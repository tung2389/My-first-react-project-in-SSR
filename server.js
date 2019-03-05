
  
const express = require('express')
const next = require('next')
const { join } = require('path')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get("*",(req,res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl //get the parsedUrl.pathname
    //console.log(parsedUrl);
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath)
    } else {
      handle(req, res, parsedUrl)
    }
  });
  server.listen(process.env.PORT || 3001,function(){
    console.log("Connected successfully")
  });
});