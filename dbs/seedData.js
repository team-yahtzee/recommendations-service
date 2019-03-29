const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');
const {roomSchema, recSchema} = require('./schema')
const aws = require('aws-sdk')
const dotenv = require("dotenv")

dotenv.config({
  path: '../.env'
})

console.log(process.env.awsSecretKey)
console.log(process.env.awsAccessKey)

var s3 = new aws.S3({ accessKeyId: process.env.awsAccessKey, secretAccessKey: process.env.awsSecretKey});

var params = {
  Bucket: 'airbnb-recommendations', /* required */
};

function getItems() {
  return new Promise((resolve, reject) => {
    var urls = []
    s3.listObjectsV2(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else  {
        let bucketContent = data.Contents
        for (item of bucketContent) {
          urls.push(`https://airbnb-recommendations.s3.amazonaws.com/${item.Key}`)
          console.log(`https://airbnb-recommendations.s3.amazonaws.com/${item.Key}`)
        }
        resolve(urls)
      } 
    })
  })
}

getItems()
.then((urls) => {
    console.log(urls)
    let db = new sqlite3.Database('./recommendations.db', (err) => {
      if (err) {
        console.error(err.message)
      }
      console.log('Connected to the chinook database');
    });

    db.serialize(() => {
      db.run(roomSchema)
      .run(recSchema)
      
    })

    db.close(err => {
      if (err) {
        return console.err(err.message)
      }
    });
  }
)


