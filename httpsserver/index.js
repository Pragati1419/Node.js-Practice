/* 
-> The http.createServer() method includes request and response  parameters
which is supplied by Node.js.

 -> The request object can be used to get information about the current Https request.

eg url,request header , and data.

-> The response object can be used to send a response for a current HTTPS

->If the response from the HTTP server is supposed to be displayed as HTML .
-> you should include an HTTP header with the correct content type and

*/


/*
const http = require('http');

const server = http.createServer((req, res)  => {
    res.end("Hello from other side!");
});

server.listen(49153 ," 127.0.0.1."  , () => {

    console.log("listening to the port no 49153");
});

*/


/*const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Hello from server side");
    resp.end();
  })
  .listen(4500);
  */
  const http = require("http");

  const server = http.createServer((req, res) => {
    res.end("Hello from other side ");
  });
  
  server.listen(49154, "127.0.0.1", () => {
    console.log("listening to the port no 49154");
  }); 



