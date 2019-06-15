let models = require('../models/models.js')
let client = require('../server.js')

module.exports = {
  getRoomRecommendations: function(req, res, next) {
    let roomNum = req.params.room 
    models.get({id:roomNum})
    .then(recommendationData => {
      res.send(recommendationData)
      client.redis.set(roomNum,recommendationData)
    })
  }
}

