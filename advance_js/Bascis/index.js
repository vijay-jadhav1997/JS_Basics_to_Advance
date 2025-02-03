
const newFruits = ['mango', 'apple', 'guva', 'papaya', 'orange', 'pinapple', 'water melon', 'musk melon',]

const neoFruits = [...newFruits]

neoFruits.push('dates')


const myObj = { username: 'Mohan', isActive: true}

const newObj = {...myObj}

/*
let i = 0
while(i < newFruits.length) {
  console.log(newFruits[i])
  i++
}
*/
// newFruits.length = 10
// console.log(newFruits.length);
// console.log(newFruits.entries());
// console.log(newFruits.keys());
// console.log(newFruits.includes());

/*
for(let i = 0; i <= 10 ; i++){
  if (i%2 === 0) {
    console.log(i);
  }
}
*/
/*
for(let i in newFruits) {
  console.log(i);
}

const object = {...myObj}
for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = object[key];
    console.log(key, " => ", element);
  }
}
*/
/*
let i = 1

do {
  console.log(i);
  i++
} while(i>0 && i < 5)

*/


//  0 2

function addition(num1, num2) {
  // debugger
  const username = 'Mohan'
  // console.log(username);
  const x = num1
  const y = num2

  function add(){
    console.log(username);
    return x+y
  }
  // console.dir(add);
  return add
}

const multiplication = addition(10,20)

// console.dir(addition);
// console.dir(multiplication);
// console.log(multiplication());

// console.dir("Jay Hari")

/*
const nums = [1,2,3,4,5,6,7,8,9,10]
const result = nums.reduce((acc, num, index) => {
  // debugger
  // console.log(num, acc);
  acc += num
  return acc
}, 0)

// console.log(`result => ${result}`);

const strFruits = newFruits.filter((fruit, index, arr) => {
  return fruit.toLowerCase().includes('l')
})

console.log(`strFruits =>` , strFruits);
console.dir( strFruits);

const isAnyAvailable = newFruits.some((fruit, index, arr) => {
  return fruit.toLowerCase().includes('l')
})

console.log(`isAnyAvailable =>` , isAnyAvailable);
console.dir( isAnyAvailable);

const isAllAvailable = newFruits.every((fruit, index, arr) => {
  return fruit.toLowerCase().includes('a')
})

console.log(`isAllAvailable =>` , isAllAvailable);
console.dir( isAllAvailable);
*/

const evenNumbers = [0,2,3,4,6,8]
/*
const isPureEvenNumberArr = evenNumbers.every((num, index, arr) => {
  if (num%2 != 0) {
    console.log(`index => ${index}`,"number => ", num);
  }
  return num%2 === 0
})

console.log(isPureEvenNumberArr);
*/



function sum() {
  let result = 0
  for(let i = 0; i < arguments.length; i++) {
    // console.log(i, arguments[i]);
    
    result += arguments[i]
  }
  return result
}
// console.log(sum(20,10,30))
// console.log(sum(...evenNumbers))

/*
const average = (...nums) => {
  // console.dir(nums);
  const sum = nums.reduce((acc, elem, i) => {
    return acc += elem
  })
  return (sum/nums.length)
}

console.log(average(20,10,30))
console.log(average(...evenNumbers))
*/

function rollADie(numberOfSides) {
  if (typeof numberOfSides !== "number") {
    numberOfSides = 6
  }

  return Math.floor((Math.random() * numberOfSides) + 1)
}

// console.log(rollADie(20))
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Jay Jay Ram Krushna Hari, after 10sec");
    resolve("Har Har Mahadev, from after resolve")
  }, 10000)
  // reject("Your promise is rejected.")
})

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("Finally block is excuted");
})

// console.dir(typeof promise)


*/

