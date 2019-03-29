const faker = require('faker');

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


const recommendation = {
  id: 'i',
  recImage: faker.image.avatar(),
  recDetails: faker.lorem.text(),
  recTitle: faker.lorem.text(),
  recCost: Math.floor(Math.random() *100 * Math.floor(10)),
  recRating: Math.floor(Math.random() * 3) + 3,
  recRatingCount: Math.floor(Math.random()*100) +40,
  roomId: 2
}

console.log(recommendation)

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
  console.log(i)
}

console.log([...Array(5).keys()])