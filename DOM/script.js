// 

const h1 = document.querySelector('h1')
const cardsElem = document.querySelector('.cards')
// console.log(document.body);

cardsElem.addEventListener('click', function(e) {
  e.stopPropagation()
  // console.log(e)
  // console.log(e.target !== cardsElem)
  if (e.target !== cardsElem) {
    // const removeElement = e.target
    // cardsElem.removeChild(removeElement)
    //! OR 
    e.target.remove()
    
  }
})

const img = document.querySelector('img')
// img.src = 'https://i.pinimg.com/736x/73/da/9c/73da9cdb89817f738a7020845d8a2c05.jpg'
// console.dir(img);

const doSome = () => { console.log('Jay');}
const doArr = [1,2,5,6,7,8,9]
const strs = '56skndj'
const numb = 856
const obje = {jay:'onk', num:52}
const booli = false

// console.dir(strs)
// console.dir(numb)
// console.dir(doArr)
// console.dir(booli)
// console.dir(obje)
// console.dir(doSome)

const example = document.querySelector('#example')
// console.log(example);

// console.log(example.innerText);
// console.log(example.textContent);
// console.log(example.innerHTML);


// console.dir(document);


function chant() {
  console.log('Jay Jay Ram krushna Hari...!!!!');
  return 'Shree Dnyanoba Mauli Tukaram..!'
}

// img.onclick = chant

// const event1 = img.addEventListener('click', chant)

let counter = 0

const event2 = cardsElem.firstElementChild.addEventListener('click', (e) => {
  e.stopPropagation()
  // console.log(e);
  // console.log(e.x, e.y);
  // console.log(e.isTrusted);
  // e.preventDefault()

  
  
  // for(let i = 1; i < 200; i++) {
    const cardElement = document.createElement('div')
    cardElement.innerText = `${++counter}`
    cardElement.className = 'card'
    cardsElem.appendChild(cardElement)
  // }
  

}, false)



//! Input events:
const usernameInput = document.querySelector('#username')
const text = document.querySelector('.text')

// usernameInput.addEventListener('input', (e) => {
// usernameInput.addEventListener('change', (e) => {
// usernameInput.addEventListener('focus', (e) => {
usernameInput.addEventListener('blur', (e) => {
  console.log(e.rela);
  // console.log(e.target.value);
  // console.log(usernameInput.value);
  e.preventDefault()

  text.innerText = `${e.target.value}`
}, true)


//* form events
const formElem = document.querySelector('form')

// formElem.addEventListener('click', (e) => {
formElem.addEventListener('submit', (e) => {
  e.preventDefault()
  e.stopPropagation()
  console.log('form submitted successfully..!!🙄🤔😄');

  const myForm = new FormData(formElem)
  for( const data of myForm.entries()){
    console.log(data);
  };

  // debugger
})



//! keboard events :
// window.addEventListener('keypress', (e) => {
// text.addEventListener('keypress', (e) => {
// text.addEventListener('keyup', (e) => {
// text.addEventListener('keydown', (e) => {
  // console.log('event type =>', e.type);
  // console.log('code =>', e.code);
  // console.log('value =>', e.key);
// })


//! mouse and touch events :
// window.addEventListener('click', (e) => {
// text.addEventListener('click', (e) => {
// text.addEventListener('dblclick', (e) => {
// text.addEventListener('mousedown', (e) => {
// text.addEventListener('mouseup', (e) => {
// text.addEventListener('mouseenter', (e) => {
// text.addEventListener('mouseleave', (e) => {
// text.addEventListener('mouseout', (e) => {
// text.addEventListener('mouseover', (e) => {
// text.addEventListener('wheel', (e) => {
// document.addEventListener('scroll', (e) => {
// text.addEventListener('touchstart', (e) => {
// text.addEventListener('touchend', (e) => {
// text.addEventListener('touchmove', (e) => {
// text.addEventListener('drag', (e) => {
// text.addEventListener('pointermove', (e) => {
// text.addEventListener('pointerenter', (e) => {
// text.addEventListener('pointerleave', (e) => {
//   e.stopPropagation()
//   console.log('event type =>', e.type);
//   console.log(e);
//   // console.log('value =>', e.key);
// })



//! Event Bubbling and Event Capturing:
const green = document.querySelector('#green')
const pink = document.querySelector('#pink')
const blue = document.querySelector('#blue')

window.addEventListener('click', (e) => {
  console.log('6 document clicked')
}, false)
document.addEventListener('click', (e) => {
  console.log('5 document clicked')
}, false)

document.body.addEventListener('click', (e) => {
  e.stopImmediatePropagation()
  // e.stopPropagation()
  console.log('4 body clicked')
}, false)

green.addEventListener('click', (e) => {
  // e.stopImmediatePropagation()
  e.stopPropagation()
  console.log('3 green clicked')
}, false)

pink.addEventListener('click', (e) => {
  e.stopImmediatePropagation()
  // e.stopPropagation()
  console.log('2 pink clicked')
}, false)

blue.addEventListener('click', (e) => {
  // e.stopImmediatePropagation()
  e.stopPropagation()
  console.log('1 blue clicked')
// }, false)
}, {once:true})

text.addEventListener('click', function(e){
  e.stopPropagation()
  console.log(e);
}, {capture:false, once:true})