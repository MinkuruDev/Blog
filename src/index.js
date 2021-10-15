const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>\nsomething')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})