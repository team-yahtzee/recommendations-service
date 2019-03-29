const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./recommendations.db', (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the chinook database');
});

module.exports.getAll=function(query, params) {
  return new Promise(function(resolve, reject) {
      if(params == undefined) params=[]

      db.all(query, params, function(err, rows)  {
          if(err) reject("Read error: " + err.message)
          else {
            // console.log(rows)
            resolve(rows)
          }
      })
  }) 
}




let all=function(query, params) {
  return new Promise(function(resolve, reject) {
      if(params == undefined) params=[]

      db.all(query, params, function(err, rows)  {
          if(err) reject("Read error: " + err.message)
          else {
            console.log(rows)
              resolve(rows)
          }
      })
  }) 
}



all(`select * from recommendations`)