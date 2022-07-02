import express from 'express'

const app = express()

app.get('/', (req,res) => {
  res.send('Hello World')
})

const port = process.env.PORT || 5000

app.listen(port, () => {console.log(`Live from the ${port} block of PORTland!!!`)})