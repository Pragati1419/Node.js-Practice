/* 
-> The http.createServer() method includes request and response  parameters
which is supplied by Node.js.

 -> The request object can be used to get information about the current Https request.

eg url,request header , and data.

-> The response object can be used to send a response for a current HTTPS

->If the response from the HTTP server is supposed to be displayed as HTML .
-> you should include an HTTP header with the correct content type and

*/

const fs = require('fs');

  const http = require("http");

  const server = http.createServer((req, res) => {
   // console.log(req.url);

   if(req.url == "/"){
    res.end("Hello from other side ");
   }
   else if(req.url == "/about"){
    res.end("I am Pragati ");
   }

   else if(req.url == "/Email")
    res.end("pragatikri31@gmail.com");
     
    else if(req.url == "/userapi"){
      fs.readFile(`C:\Users\Pragati\OneDrive\Desktop\Nodejs\httpsserver/Userapi/userapi.json` , "utf-8"  , (err , data) => {
      console.log(data);
    });
      res.end("Hello from the API side");
      
    }

    else{
      res.writeHead(404);
      res.end(" <h1>  404 error Page . Page doesn't Exists </h1>");
    }
  });
  
  server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
  }); 



