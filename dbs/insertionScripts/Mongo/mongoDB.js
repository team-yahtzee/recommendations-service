const Mongoose = require('mongoose')

Mongoose.connect("mongodb://localHost/rooms",{ useNewUrlParser: true })

const Room = Mongoose.model('rooms',new Mongoose.Schema ({
  id: Number,
  username: String,
  recImg: String,
  recDetails: String,
  recTitle: String,
  recCost: Number,
  recRating: Number,
  recratingCount: Number
}))

module.exports.Room = Room

