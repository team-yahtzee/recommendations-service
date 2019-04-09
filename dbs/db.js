const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('/Users/alanzhao/Documents/coding/Hack_Reactor/recommendations-service/dbs/recommendations.db', (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the chinook database');
});

module.exports = db;