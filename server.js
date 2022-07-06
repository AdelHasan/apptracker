import express from 'express'

const app = express()

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.get('/', (req,res) => {
  throw new Error('error')
  res.send('Hello World')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.listen(port, () => {console.log(`Live from the ${port} block of PORTland!!!`)})