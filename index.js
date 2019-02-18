const express = require('express')
const app = express()
const transaction = require('./transactionAPI')

app.get('/transaction/:type/:address', (req,res) => {
  answer = transaction(req.params.type, req.params.address);
//   console.log(answer)
  res.send(answer);
});

app.listen(3000, (port) => console.log(`listening on port ${port}`))