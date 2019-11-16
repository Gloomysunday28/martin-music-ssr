const express = require('express')
const server = express()
const path = require('path')
const { createBundleRenderer  } = require('vue-server-renderer')
const serverMainfest = path.resolve(__dirname, './dist/vue-ssr-server-bundle.json')

const renderer = createBundleRenderer(serverMainfest, {
  runInNewContext: false,
  template: require('fs').readFileSync(path.join(__dirname, './index.html'), 'utf-8'),
  clientManifest: require(path.resolve(__dirname, './dist/vue-ssr-client-manifest.json'))
})

server.use(express.static(path.resolve(__dirname, './dist')))

server.get('*', (req, res) => {
  const context = {
    url: req.url
  }
  
  renderer.renderToString(context, (err, html) => {
    console.log(err);
    
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      ${html}
    `)
  })
})

server.listen(8080)