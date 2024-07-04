// 
//? Truthy and Falsy values in JS
//* Falsy values 

// debugger

sayHi()


const username = 'Madhav'
const age = 25


//? Functions in JS:

//* Function declaration
function addTwoNumbers(num1=0, num2=0) {
  // debugger
  return num1 + num2
}

// const result = addTwoNumbers(addTwoNumbers(25, 25), addTwoNumbers(10,40))
// console.log(result)

//* Function declaration
function sayHi() {
  let x = 2
  let y = 5
  addTwoNumbers(x, y)
  return "Jay Shree Ram"
}



//* Function Expression
const sayRam = function () {
  return "Jay Jay Shree Ram Krushna Hari"
}

const square = function(num) {
  return num**2
}


//* Arrow Function Expression
const sayRadheRadhe = () => {
  return "Jay Jay Shree Radhe Radhe...!"
}

const substract = (num1, num2) => num1 - num2
console.log([substract(20, 5), "Jay Shree Ram"]);