const aws = require('aws-sdk')
const dotenv = require("dotenv")

dotenv.config({
  path: '../.env'
})

var s3 = new aws.S3({ accessKeyId: process.env.awsAccessKey, secretAccessKey: process.env.awsSecretKey});

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






