const Mongoose = require('mongoose')
const faker = require('faker');
const { performance } = require('perf_hooks');

Mongoose.connect("mongodb://localHost/rooms",{ useNewUrlParser: true })

const Room = Mongoose.model('rooms',new Mongoose.Schema ({
  id: Number,
  name: String
}))

let t0 = performance.now()

let seed = +process.env.seed
let total = +process.env.total

const insertQueries = (count = 0) => {
  let i = count * seed
  let end = (count * seed) + seed
  let values = []
  while (i < end) {
    let value = { 
      'id': i,  
      'username': faker.internet.userName(),
      'recImg': faker.image.imageUrl(),   
      'recDetails': faker.lorem.sentence(),   
      'recTitle': faker.lorem.words(),   
      'recCost': faker.finance.amount(),  
      'recRating': faker.random.number(),   
      'recratingCount': faker.random.number()  
    }
    values.push(value)
    i++
  }
  Room.insertMany(values, function(err) {
    if (err) console.log ('error inserting', err)
    else {
      if (count < (total/seed) - 1) {
        count ++
        insertQueries(count)
      } else {
        let t1 = performance.now()
        console.log('completed insertion! Time taken: ', (t1-t0)/60000, '(min)')
      }    
    }
  })
}  

insertQueries()
