const db = require('../../dbs/insertionScripts/Mongo/mongoDB.js')

module.exports.get=function(query) {
  return new Promise(function(resolve, reject) {
      db.Room.find(query, function(err, rows)  {
          if(err) reject("Read error: " + err.message)
          else {
            resolve(rows)
          }
      })
  }) 
}
