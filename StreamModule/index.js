// Reading from  a Stream
// Create a readable Stream 
// HAndle stream events -> data , end , error , success


const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

   var fs = require('fs');
   fs.readFile("input.txt" ,  (err, data) => {
    if(err) return console.error(err);
    console.log(data.toString());
   });
});

server.listen(5000 ,"127.0.0.1");