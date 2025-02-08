// const fs = require('fs')
// const os = require('os')

// const user = os.userInfo()

// console.log(user);

// fs.appendFile('greeting.txt', 'Jay Jay Ram Krushna Hari - '+ user.username, () => {console.log('File is Created successfully!')})

// fs.appendFile('greeting.txt', '\n Jay Jay Radha Raman Hari, Jay Jay Radha raman Hari Bol, Govind Radhe Gopal Radhe - ', () => {console.log('File is Created successfully!')})


const note = require('./note.js')

const _ = require('lodash')


// console.log(note.myArr.filter(num => num % 3 === 0))


// console.log(note.addNumbers(1,2,3,4,5,6,7,8,9,10))

// console.log(note.addNumbers[note.addNumbers.length]);


let data = ['Jay Hari', 20, 20, true, 20, 'Jay Hari', 'Radhe Radhe', 'Shree Dnyanoba Mauli Tukaram']

const uniqueData = _.uniq(data)

console.log(uniqueData);
