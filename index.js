const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())

const categories = require('./data/chef.json')
// const news = require('./data/news.json');

app.get('/chef', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})