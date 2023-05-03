const express = require('express')
const app = express()
const port = 5000

const cors = require('cors')

app.use(cors())

const chefs = require('./data/chef.json')

app.get('/chef', (req, res) => {
  res.send(chefs)
})
// app.get('/chef/:id', (req, res) => {
//   res.send(categories)
// })
app.get('/chef/:id', (req, res) => {
  const id = req.params.id; 
  // console.log(id)
  const selectedChef = chefs.find(n => n.id == id);
  res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})