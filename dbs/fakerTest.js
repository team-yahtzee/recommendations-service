const faker = require('faker');

const User = {
  id: 'i',
  recImage: faker.image.avatar(),
  recDetails: faker.lorem.text(),
  recTitle: faker.lorem.text(),
  recCost: Math.floor(Math.random() *100 * Math.floor(10)),
  // recRating 
  email: faker.internet.email(),
  website: faker.internet.url(),
  website: faker.address.streetAddress() + faker.address.city() + faker.address.country()
}

console.log(Math.floor(Math.random() *Math.floor(5)))

module.exports.recSchema = 
`create table if not exists recommendations (
  id integer not null primary key,
  recImg varchar(255),
  recDetails varchar(255),
  recTitle varchar(255),
  recCost varchar(255),
  recRating varchar(255),
  recratingCount varchar(255),
  roomId integer(50)
);`

for (let i=0; i<= 100; i++) {
  
}