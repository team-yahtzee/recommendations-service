const aws = require('aws-sdk')
const config = require('./config')

// console.log(config.awsAccessKey)
// console.log(config.awsSecretKey)

var s3 = new aws.S3({ accessKeyId: config.awsAccessKey, secretAccessKey: config.awsSecretKey});

// construct getParam
var getParams = {
  Bucket: 'airbnb-recommendations', //replace example bucket with your s3 bucket name
  Key: '3abef769-fcf6-4ac8-bb77-a20eee693b9e.jpg' // replace file location with your s3 file location
}


var params = {
  Bucket: 'airbnb-recommendations', /* required */
};

var urls = []
s3.listObjectsV2(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else  {
    let bucketContent = data.Contents
    for (item of bucketContent) {
      urls.push(item.Key)
      console.log(`https://airbnb-recommendations.s3.amazonaws.com/${item.Key}`)
    }
  } 
});






