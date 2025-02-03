//*
'use strict'

function createUser(firstName, lastName, age){
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    getBirthYear: createUser.commonMethods.getBirthYear
  }
  return user
}

createUser.commonMethods = {
  getBirthYear() {
    console.log(this);
    return new Date().getFullYear() - this.age
  }
}


const user1 = createUser('Shree', 'Radhe', 21)
const user2 = createUser('Shree', 'Krushna', 26)

// user1.getBirthYear()
// user2.getBirthYear()
// getBirthYear()


function Student(name, age, city) {
  this.name = name,
  this.age = age,
  this.city = city
}

const studentPrototype = {
  introduceSelf () {
    return `Hello, I'm ${this.name}. I'm ${this.age} years old and I'm from ${this.city}`
  }
}

Student.prototype.introduceSelf = studentPrototype.introduceSelf

Student.prototype.greet = function() {
  return `Jay Hari from ${this.name}`
}

const stud1 = new Student('Sharada Mate', 28, 'Pune')
const stud2 = new Student('Shyam Kale', 22, 'Jaipur')



class User {
  constructor(name, age, city){
    this.name = name
    this.age = age
    this.city = city
  }

  greet(){
    return `Jay Hari to everyone, welcome to our platform and enjoy learning`
  }

  introduce(){
    return `Hello! I'm ${this.name}, ${this.age} years old and I come from ${this.city}.`
  }
  
}

const user3 = new User('Manish Sharma', 23, 'Chennai')
