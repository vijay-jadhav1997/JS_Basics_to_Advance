// 
//? Truthy and Falsy values in JS
//* Falsy values 

// debugger

// sayHi()

// console.log(age);

// var age = 20
// console.log(`age = ${age}`);
const studentName = 'Madhav'


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
  const y = 5
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
// console.log([substract(20, 5), "Jay Shree Ram"]);


// setTimeout(()=> console.log("Jay Shree Ram"), 5)
// setTimeout(()=> console.log("Ram Krushna Hari"), 2)

// for(i=1; i<3; i++){
//   console.log(i);
// }

var addition = (x, y) => {
  return x+y
}

function outer(){
  let x = 20
  function inner() {
    let y = 25
    function addSum(){
      return x+y
    }
    console.log(addSum());
    return addSum
  }
  console.log(inner());
  return inner
}

// const result = outer()
// console.log(result);

// ! Array methods: .forEach(), .map(), .reduce(), .filter(), etc.
const fruits = ['apple', 'banana', 'mango', 'papaya', 'grapes', 'coconut', 'orange']
//* forEach method:
fruits.forEach(function(fruit, index, array){
  // console.log(index+1, fruit)
  return fruit
})
// fruits.forEach(fruit => console.log(fruit))
// fruits.forEach((fruit, index, array) => console.log(index+1, fruit))

// * map:
// fruits.map((fruit) => {
//   console.log(fruit.toUpperCase());
//   return fruit.toUpperCase()
// })

const fruity = fruits.map(fruit => fruit.toUpperCase())
// console.log(fruity);

// console.log("\n\n");

// * filter():
// const fruitt = fruits.filter((fruit, index) => ++index < 5)
// const fruitt = fruits.filter((fruit, index) => index++ < 5)
// const fruitt = fruits.filter(fruit => fruit.length > 5)

// * methods Chainning
// const fruityy = fruits.filter(fruit => fruit.length > 5).map(fruit => fruit.toUpperCase())
// const fruityy = fruits.filter(fruit => fruit.includes('n')).map(fruit => fruit.toUpperCase())
// const fruityy = fruits.filter(fruit => fruit.toUpperCase().includes('n')).map(fruit => fruit.toUpperCase())
const fruityy = fruits.filter(fruit => fruit.includes('n') && fruit.length>5 ).map(fruit => fruit.toUpperCase())
// console.log(fruityy);

const students = [
  {
    name : "Raghav",
    age: 25
  },
  {
    name : "Madhav",
    age: 21
  },
  {
    name : "Shyam",
    age: 14
  },
  {
    name : "Sharang",
    age: 18
  },
  {
    name : "Gopal",
    age: 11
  },
]

// const adultStudents = students.filter(student => student.age >= 18)
const adultStudents = students.filter(student => student.age >= 18).map(student => student.name)
// console.log(adultStudents);


const numbers = [1, 2, 3, 4, 5]
// debugger
// const result = numbers.reduce(function(accumulator, current, index) {
//   console.log(`accumalator= ${accumulator}, current= ${current}, index= ${index}`);
//   return accumulator + current
// }, 0)

const result = numbers.reduce(function(acc, curr, i) {
  // console.log(`accumulator= ${acc}, current= ${curr}, index= ${i}`);
  acc.push(curr)
  return acc
}, [])

// console.log(result);

function add(){
  let result = 0 
  // console.log((arguments[0]));
  const nums = [...arguments]
  // for(i=0; i < nums.length; i++) {
  //   result += nums[i]
  // }
  
  // nums.forEach(num => result += num )
  // return result

  return nums.reduce((acc, curr) => acc += curr, 0)
  
}

// function add(...nums){
//   creturn nums.reduce((acc, curr, i)=> acc += curr, 0)
// }
// const res = add(1,2,3,4,5,6)
// console.log(res);

const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10]

const nums = [...nums1, ...nums2, 11,12,13,14,15]

const user = {
  name: 'Shree',
  age:21, 
  address: {
    location: '101 street, "Shree_Radhe Niwas"', 
    pincode: 431103
  }
}

// const updatedUser = {...user, city:"Vrindavan"}
const updatedUser = {...user, city:"Vrindavan", name:"Shree_Radhe"}

//!  Destructuring in JS:
//* 1) Array destructuring 
const[fruit1, fruit2] = fruits
const{5: fruit5} = fruits
// console.log(fruit1, fruit2);

//* 2) Object destructuring 
// const{name, age} = user
const{name: username, age: userAge} = user
// const{address: {pincode}} = user
const{address: {pincode : code}} = user