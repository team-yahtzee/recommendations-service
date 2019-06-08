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

// id i
// |
// user faker.userName
// |
// recImg varchar(255)
// |
// recDetails varchar(255)
// |
// recTitle varchar(255)
// |
// recCost varchar(255)
// |
// recRating varchar(255)
// |
// recratingCount varchar(255)
// |
// roomId integer(50)
// recImg,recDetails,recTitle,recCost,recRating,recratingCount,roomId

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

// let i = 0

// client.query(`PREPARE roomInsertion (integer, varchar (100), varchar(255), varchar(255), varchar(255), varchar(255), varchar(255), varchar(255)) AS
//     INSERT INTO rooms VALUES($1, $2, $3, $4, $5, $6, $7, $8);`)
// .catch(err=>{
//   console.log('error preparing insertion', err)
// })

// while ( i < 1000) {
//   let values = `(` + JSON.stringify(i) + ',' + 
//   "'" + faker.internet.userName() + "'" + ',' + 
//   "'" + faker.image.imageUrl() + "'" + ',' + 
//   "'" + faker.lorem.sentence() + "'" + ',' + 
//   "'" + faker.lorem.words() + "'" + ',' + 
//   "'" + faker.finance.amount() + "'" + ',' + 
//   "'" + faker.random.number() + "'" + ',' + 
//   "'" + faker.random.number() + "'" + `)`
//   client.query(`EXECUTE roomInsertion ${values};`)
//   // client.query(`insert INTO rooms (id, username) VALUES (${JSON.stringify(i)}, 'ben')`)
//   .catch((error) => {
//     console.log(`Error in copy command: ${error}`)
//   })
//   i++
// }

const insertQueries = (count = 0) => {
  let i = count * 50000
  let end = (count * 50000) + 50000
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
    if (count < 199) {
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

// Execute Copy Function
// var stream = client.query(copyFrom(`COPY ${targetTable} FROM CSV HEADER STDIN`))
// var fileStream = fs.createReadStream(inputFile)

// fileStream.on('error', (error) =>{
//   console.log(`Error in reading file: ${error}`)
// })
// stream.on('error', (error) => {
//   console.log(`Error in copy command: ${error}`)
// })
// stream.on('end', () => {
//   console.log(`Completed loading data into ${targetTable}`)
//   client.end()
// })
// fileStream.pipe(stream);

// // Connecting to Database
// const client = new Client({
//   connectionString: conString,
// })

// client.connect()

// const executeQuery = (targetTable) => {
//   const execute = (target, callback) => {
//       client.query(`Truncate ${target}`, (err) => {
//               if (err) {
//               client.end()
//               callback(err)
//               // return console.log(err.stack)
//               } else {
//               console.log(`Truncated ${target}`)
//               callback(null, target)
//               }
//           })
//   }
//   execute(targetTable, (err) =>{
//       if (err) return console.log(`Error in Truncate Table: ${err}`)
//       var stream = client.query(copyFrom(`COPY ${targetTable} FROM STDIN`))
//       var fileStream = fs.createReadStream(inputFile)
      
//       fileStream.on('error', (error) =>{
//           console.log(`Error in creating read stream ${error}`)
//       })
//       stream.on('error', (error) => {
//           console.log(`Error in creating stream ${error}`)
//       })
//       stream.on('end', () => {
//           console.log(`Completed loading data into ${targetTable}`)
//           client.end()
//       })
//       fileStream.pipe(stream);
//   })  
// }
// // Execute the function
// executeQuery(table)