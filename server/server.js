const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:room', (req, res, next) => {
  res.send(`room ${req.params.room}`)
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
