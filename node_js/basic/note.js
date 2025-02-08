console.log("Jay Jay Vitthal Rakhumai! => from note.js")


const myArr = [20,10,30,40,60,50,80,70,100,90]

function addNumbers(...numbers) {
  let result = 0
  for(let i = 0; i < numbers.length; i++) {
    result += numbers[i]

  }
  return result
}

module.exports = {
  myArr : myArr,
  addNumbers
}