const faker = require('faker');
const { performance } = require('perf_hooks');
const db = require('./mongoDB.js')

let t0 = performance.now()

let seed = +process.env.seed
let total = +process.env.total

const insertQueries = (count = 0) => {
  let i = count * seed
  if (Number.isInteger(i/100000)) {
    console.log('total seed = ',i, '  time:   ',performance.now())
  }
  let end = (count * seed) + seed
  let values = []
  while (i < end) {
    let value = { 
      'id': i,  
      'username': faker.internet.userName(),
      'recImg': 'https://picsum.photos/300',   
      'recDetails': faker.lorem.sentence(),   
      'recTitle': faker.lorem.words(),   
      'recCost': faker.finance.amount(),  
      'recRating': Math.floor(1 + (Math.random() * Math.floor(4))),   
      'recratingCount': Math.floor(1 + (Math.random() * Math.floor(100)))   
    }
    values.push(value)
    i++
  }
  db.Room.insertMany(values, function(err) {
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
