
// const http = require('http')

// const server = http.createServer((request, response) => {

//   // we can only pass string argument to the .write() fn. 
//   response.write("<h1>Jay Jay Ram Krushna Hari</h1>")
//   response.end()
// })

// server.listen(1997)





// const http = require('http')

// const server = http.createServer((request, response) => {
//   response.writeHead(200, {'content-Type': 'text/html', 'Access-Control-Allow-Origin' : '*'})
//   response.write("<h1>🙏🏻...Shree Dnyanoba Mauli Tukaram...🙏🏻</h1><h2> 🚩...Shree Vitthal Rakhumai...🚩</h2>")

//   response.end()
// })

// server.listen(1997)

// console.log(http);


// const http = require('http')

// const server = http.createServer((request, response) => {
//   response.writeHead(200, {"content-Type": 'json/application', 'Access-Control-Allow-Origin' : '*'})
//   response.write(JSON.stringify({name: 'Shree Radha Madhav', greet: 'Radhe Radhe Govind Radhe', successful: true}))
//   response.end()
// })


// // server.listen(1997)

// server.listen(8000)


const http = require('http')
const query = require('querystring')

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    const urlData = request.url

    // console.log(query.parse(urlData.replace('/?', ''))?.name);
    const userData = query.parse(urlData.replace('/?', ''))
    
    if (userData?.name === 'JayHari' && userData?.password === 'mauli@1275') {
      
      response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'})
      response.write(JSON.stringify(userData))
    } else {
      response.writeHead(401, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'})
      response.write(JSON.stringify({status: 'failed', message: 'User authentication failed'}))
    }

    response.end()
    console.log('Logged from the GET method');
  } else {
    let userData = ''
    
    request.on('data', (chunks) => {
      // console.log(chunks);
      // console.log(chunks.toString());
      userData += chunks.toString()
    })


    request.on('end', () => {
      const data = query.parse(userData)
      // const data = userData
      
      console.log(data);
      // console.log(userData);
      // console.log(data?.name);
      // console.log(data?.password);

      if (data?.name === 'JayHari' && data?.password === 'mauli@1275') {
      // if (data?.name === 'Ram Krushna Hari' && data?.password === 'jayHari@1272') {
        // Header info:
        response.writeHead(200, {"Content-Type": 'application/json', 'Access-Control-Allow-Origin' : '*'})
        
        const dhamData = {
          status: 'success',
          message: 'User authentication successful',
          userData: data,
          dhamMahima:  {name: 'Shree Vitthal Rakhmini',
            dham: 'Pandharpur',
            sevak: ['Shree Dnyanoba Mauli', 'Shree Tukoba', 'Shree Marotiray', 'Shree Namdev ji', 'Shree Eknath ji',], 
            successful: true,
            date: new Date().toLocaleTimeString()}
        }
        
        const dataStr = JSON.stringify(dhamData)
        
        // response.write('Jay Jay Ram Krushna Hari...')
        response.write(dataStr)
      } else {
        // Header info:
        response.writeHead(401, {"Content-Type": 'application/json', 'Access-Control-Allow-Origin' : '*'})
        response.write(JSON.stringify({status: 'failed', message: 'User authentication failed'}))
      }
      
      // disconnect user
      response.end()
    })

    console.log('Logged from the POST method');
  }
  // response.write(request.method)
})

server.listen(8080)
