//provided execution stats 
require('newrelic');

//server
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const controller = require('./controller/controller')
const cors = require('cors')
const redis = require('redis')

const client = redis.createClient()

client.on("error", function (err) {
  console.log("Redis Error !*!*!" + err);
});

app.use(cors())
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:room', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/room/:room', (req, res, next) => {
  let roomNum = req.params.room 
  client.get(roomNum, (err, redisData) => {
    // If that key exist in Redis store
    if (err) {
      console.log('error getting from redis client',err)
    } else if (redisData) {
      res.send([JSON.parse(redisData)])
    } else {
      controller.getRoomRecommendations(req, res, next)
    }
  })
})

app.post('/room/:room', (req, res, next) => {
  console.log('we received the post!',req.body)
  res.sendStatus('200')
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

module.exports.redis = client