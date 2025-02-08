// const http = require('http')

// const {MongoClient} = require('mongodb')


// const server = http.createServer((request, response) => {
//   const url = 'mongodb://localhost:27017'
  

//   MongoClient.connect(url, (error, connection) => {
//     console.log("Shree Vitthal");
//     if (error) {
//       console.log(error);
//       throw error;
//     } else {
//       const db = connection.db('students')
//       console.log("Shree Dnyanoba");
      
//       db.createCollection('admission', (error, collection) => {
//         console.log("Shree Tukoba");
//         if (error) {
//           console.log(error);
//           throw error
//         }
//         response.write("<h1> Shree Dnyanoba Mauli Tukaram</h1>")
//         console.log('Success!')
//         response.end()
//       })
//     }
    
//   })
  
//   // response.write('<h1>Jay Jay Ram Krushna Hari</h1>')
//   console.log('Something Went Wrong!')
// })

// server.listen(8000, () => console.log('Server port is running on port 8000')
// )

// const http = require('http');
// const { MongoClient } = require('mongodb');

// const server = http.createServer((request, response) => {
//   const url = 'mongodb://127.0.0.1:27017';
//   console.log(url);
  
  
//   MongoClient.connect(url, (error, connection) => {
//     console.log("Har Har Mahadev");
//     if (error) {
//       console.error("Database connection failed:", error);
//       response.writeHead(500, { 'Content-Type': 'text/html' });
//       response.write("<h1>Internal Server Error</h1>");
//       response.end();
//       return;  // Stop further execution
//     }

//     console.log("Shree Vitthal");

//     const db = connection.db('students');

//     db.createCollection('admission', (error, collection) => {
//       if (error) {
//         console.error("Collection creation failed:", error);
//         response.writeHead(500, { 'Content-Type': 'text/html' });
//         response.write("<h1>Database Error</h1>");
//         response.end();
//         return;  // Stop further execution
//       }

//       console.log("Shree Dnyanoba");
//       console.log("Shree Tukoba");
//       console.log('Success!');

//       // Send a response only after the database operation is done
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       response.write("<h1>Shree Dnyanoba Mauli Tukaram</h1><h2> Database and Collection created successfully!</h2>");
//       response.end();
//     });
//   });
// });

// server.listen(8000, () => console.log("Server running on port 8000"));


// const http = require('http')
// const mongo = require('mongodb').MongoClient

// const server = http.createServer((request, response) => {
//   const url = 'mongodb://127.0.0.1:27017'

//   mongo.connect(url, (error, conn) => {
//     if (error) {
//       throw error
//     }else {
//       const data = {
//         name: 'Radha Madhav',
//         email: 'radha.madhav@gopi.org',
//         dham: 'Vrindavan'
//       }
//       const db = conn.db('students')
//       db.collection('admission').insertOne(data, (error, dataRes) => {
//         if (error) throw error
//         response.writeHead(201, {'content-type': 'application/json'})

//         const successMessage = JSON.stringify({message: dataRes})
//         response.write(successMessage)
//         response.end()
//       })
//     }
//   })

// })

// server.listen(8080)


const http = require('http');
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    return client.db('students');
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process if DB connection fails
  }
}

const server = http.createServer(async (request, response) => {
  console.log("Server received a request");

  const db = await connectDB();
  
  try {
    await db.createCollection('admission');
    console.log("Collection created successfully!");
    
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("<h1>Shree Dnyanoba Mauli Tukaram.... Jay Jay Vitthal Rakhumai...</h1><h2>Database and Collection created successfully!</h2>");
  } catch (error) {
    console.error("Collection creation failed:", error);
    response.writeHead(500, { 'Content-Type': 'text/html' });
    response.write("<h1>Database Error: Collection creation failed!</h1>");
  }

  response.end();
});

server.listen(8000, () => console.log("Server running on port 8000"));
