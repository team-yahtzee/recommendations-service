let models = require('../models/models')

module.exports = {
  getRoomRecommendations: function(req, res, next) {
    let roomNum = req.params.room 
    models.get({id:roomNum})
    .then(recommendationData => {
      res.send(recommendationData)
    })
  }
}

