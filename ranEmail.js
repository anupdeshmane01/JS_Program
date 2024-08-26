// ranEmail.js
const { faker } = require('@faker-js/faker');

const x = faker.internet.userName()
const a = faker.number.int({ min: 1000, max: 9999 })
console.log(a+"_"+x)
