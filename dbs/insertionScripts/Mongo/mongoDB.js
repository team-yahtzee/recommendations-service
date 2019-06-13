const Mongoose = require('mongoose')

const mongoPath = process.env.mongoPath

Mongoose.connect(`mongodb://3.130.244.88:27017/rooms`,{ useNewUrlParser: true })

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

