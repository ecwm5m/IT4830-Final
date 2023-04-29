const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  //res.send('Hello World!')
  console.log('Middleware')
  next()
})

app.get('/', (req, res, next) => {
  res.send('Hello from express')
})

app.use('/api/posts', (req,res,next)=>{
  const test = "test string"

  res.status(200).json({
    //message:"This is fetched data",
    TEST: test
  });
})


module.exports = app;
