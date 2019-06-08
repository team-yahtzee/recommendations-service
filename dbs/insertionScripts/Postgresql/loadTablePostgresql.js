const { Pool, Client} = require('pg')
const config = require('./config.json')
const faker = require('faker');
const { performance } = require('perf_hooks');


// Getting connectin parameters from config.json
const host = config.host
const user = config.user
const pw = config.pw
const db = config.db
const port = config.port
const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`

// Connecting to Database
const client = new Client({
  connectionString: conString,
})
client.connect()

let t0 = performance.now()
let targetTable = 'rooms'

client.query(`drop table if exists ${targetTable}`, (err) => {
  if (err) {
    client.end()
    // return console.log(err.stack)
    return console.log(`Error in dropping table ${err}`)
    process.exit(1)
  } else {
    console.log(`dropped ${targetTable}`)
  }
})

client.query(`CREATE TABLE ${targetTable}(
  id integer PRIMARY KEY,
  username VARCHAR (100) NOT NULL,
  recImg varchar(255),
  recDetails varchar(255),
  recTitle varchar(255),
  recCost varchar(255),
  recRating varchar(255),
  recratingCount varchar(255)
);`)
.catch(err => {
  console.log('error creating table', err)
})
.then(()=>{
  console.log('created table!')
})

let seed = +process.env.seed
let total = +process.env.total

const insertQueries = (count = 0) => {
  let i = count * seed
  let end = (count * seed) + seed
  let values = ''
  while ( i < end) {
    let value = `(` + JSON.stringify(i) + ',' + 
    "'" + faker.internet.userName() + "'" + ',' + 
    "'" + faker.image.imageUrl() + "'" + ',' + 
    "'" + faker.lorem.sentence() + "'" + ',' + 
    "'" + faker.lorem.words() + "'" + ',' + 
    "'" + faker.finance.amount() + "'" + ',' + 
    "'" + faker.random.number() + "'" + ',' + 
    "'" + faker.random.number() + "'" + `)` + (i === end - 1 ? ';' : ',')
    values = values.concat(value)
    i++
  }
  client.query(`insert INTO rooms (
    id, 
    username, 
    recImg, 
    recDetails,
    recTitle,
    recCost,
    recRating,
    recratingCount
    ) 
    VALUES ${values}`
  )
  .then(()=>{
    if (count < ((total/seed) - 1)) {
      count ++
      insertQueries(count)
    } else {
      let t1 = performance.now()
      console.log('completed insertion! Time taken: ', (t1-t0)/60000, '(min)')
    }
  })
  .catch((err)=>{
    console.log('error inserting on count',count,'error is',err)
  })
}

insertQueries()

