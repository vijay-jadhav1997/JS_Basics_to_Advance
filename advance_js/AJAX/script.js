// 
'strict mode'

const URL = 'https://dog.ceo/api/breeds/image/random'

//! XMLHttpRequest

//* Selector
const clickBtn = document.querySelector('.click')
const img = document.querySelector('.dogImg')


//* Handlers
function getImage(){
  const xhr = new XMLHttpRequest()

  // console.log(xhr);
  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    img.src = xhr.response.message
    console.log(xhr);

  })

  // xhr.onload = () => {
  //   img.src = xhr.response.message
  //   console.log(xhr);

  // }

  xhr.open('GET', URL)
  xhr.send()
}

//* Event listeners

// clickBtn.addEventListener('click', getImage, false)


// ? Promise:
const user = {
  id: 25354,
  username: 'Govind Sharma'
}
// const myPromise = new Promise((resolve, reject) => {
//  setTimeout(()=>{ if(user.id === 354) {
//     resolve('Promise resolved successfully.')
//   }
//   else {
//     reject('Promise rejected.')
//   }}, 5000)
// })

// myPromise.then((data)=> {
//   console.log(data) //* 'Promise resolved successfully.'
// }).catch((err) => {
//   console.log(err) //* 'Promise rejected.'
// }).finally(() => {
//   console.log('it is executed at the end either promise resolve or reject.')
// })



//* resolving Callback hell using promise
function makeHttpRequest(method, url){
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
      resolve(xhr.response)
    })
    xhr.addEventListener('error', () => {
      reject('request failed')
    })
  })

  xhr.open(method, url)
  xhr.send()

  return promise
}

/*
makeHttpRequest('GET', 'https://dummyjson.com/users')
.then((usersdata) =>  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersdata?.users[0]?.id}`))
.then((postdata) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postdata?.posts[0]?.id}`))
.then((commentsData) => {
  console.log(commentsData?.comments[0]);
  // console.log(commentsData?.comments[0]?.body);
  // console.log(commentsData?.comments[1]?.body);
  return makeHttpRequest('GET', `https://dummyjson.com/user/${commentsData?.comments[0]?.id}`)
})
.then((userdata) => {
  console.log(userdata);
})
.catch((err) => {
  console.log(err);
})
*/

//! fetch request

// fetch('https://dummyjson.com/products')
// .then(response => response.json())
// .then((productsData) => {
//   console.log(productsData);
// })


//! async await

async function getData(){
  const response = await fetch('https://dummyjson.com/users')
  console.log(response);
  console.log('Radhe Radhe');
  const data = await response.json()
  console.log(data);
}

getData()

console.log('Jay Jay Radhe Shyam');
for(i=0; i<5; i++) {
  console.log(i);
}
console.log('Ram Krushna Hari');