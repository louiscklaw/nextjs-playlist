// server.js
const { createServer } = require('http')
const fs = require('fs')
const { parse } = require('url')
const next = require('next')

const sitemap = require('nextjs-sitemap-generator') // Import the package

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

sitemap({
  alternateUrls: {
    // en: 'https://example.en',
    // es: 'https://example.es',
    // ja: 'https://example.jp',
    // fr: 'https://example.fr',
  },
  baseUrl: 'https://portfolio.iamon99.com',
  // extraPaths: ['/extraPath'],
  ignoredPaths: ['admin'],
  ignoredExtensions: ['js', 'map'],
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'static/',
  sitemapFilename: 'sitemap.xml',
  // nextConfigPath: __dirname + '\\next.config.js',
})

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else if (pathname === '/sitemap.xml') {
        // console.log('helloworld sitemap.xml')
        // await app.render(req, res, '/b', query)
        let content = await fs.readFileSync('./static/sitemap.xml', { encoding: 'utf-8' })

        res.writeHead(200, { 'Content-Type': 'application/xml' })
        res.end(content, 'utf-8')
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
