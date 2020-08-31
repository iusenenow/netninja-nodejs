const { people, age, hello } = require('./people')

console.log(people, age, hello)

const os = require('os')
console.log(os.platform(), os.homedir())