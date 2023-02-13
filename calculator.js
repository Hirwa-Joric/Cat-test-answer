const express = require('express')
const app = express()
const port = 3000

app.get('/sum', (req, res) => {
  const numbers = req.query.numbers

  if (!numbers) {
    return res.status(400).send('Bad Request: numbers parameter is required')
  }

  const numbersArray = numbers.split(',').map(Number)
  const sum = numbersArray.reduce((acc, cur) => acc + cur, 0)

  res.send(`The sum of ${numbersArray} is ${sum}`)
})

app.get('/product', (req, res) => {
  const numbers = req.query.numbers

  if (!numbers) {
    return res.status(400).send('Bad Request: numbers parameter is required')
  }

  const numbersArray = numbers.split(',').map(Number)
  const product = numbersArray.reduce((acc, cur) => acc * cur, 1)

  res.send(`The product of ${numbersArray} is ${product}`)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

/// to use the code you must write the url http://localhost:300/product?numbers=1,2,3,6,7,4,3