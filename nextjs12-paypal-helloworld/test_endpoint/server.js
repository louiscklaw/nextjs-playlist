// draft a example express server
// with a simple GET endpoint
//   - showing the content of GET
// with a simple POST endpoint
//   - showing the content of POST
// with a simple PUT endpoint
//   - showing the content of PUT

const express = require('express')
const app = express()
const port = 8083

// Middleware to parse JSON bodies
app.use(express.json())

// GET endpoint
app.get('/example_paypal', (req, res) => {
  // Showing the query parameters from the GET request
  console.log(req.query)
  res.send(`GET request received with query: ${JSON.stringify(req.query)}`)
})

// POST endpoint
app.post('/example_paypal', (req, res) => {
  // Showing the body of the POST request
  console.log(req.body)
  res.send(`POST request received with body: ${JSON.stringify(req.body)}`)
})

// PUT endpoint
app.put('/example_paypal', (req, res) => {
  // Showing the body of the PUT request
  console.log(req.body)
  res.send(`PUT request received with body: ${JSON.stringify(req.body)}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
