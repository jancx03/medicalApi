
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3010

app.use(bodyParser.json())
const items = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})



//creates a new medical bill
app.post('/items', (req, res) => {
  const bill = req.body
  items.push(bill)
  res.status(201).json({ message: 'Created' })
})

// returns a list of medical bills
app.get('/items', (req, res) => {

  res.json(items)

})


app.listen(port, () => {
  console.log(`Running app on port ${port}`)
})