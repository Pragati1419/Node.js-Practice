const { application } = require('express');
const express = require('express');

const app = express();

app.get("/" , (req, res ) => {

    res.send("Hello from ExpressJS");

});

app.get('/about' , (req, res ) => {

    res.send("My Name is Pragati Kumari");

});

app.get('/Email' , (req, res ) => {

    res.send("pragatikri31@gmail.com");

});

app.get('/Contact' , (req, res ) => {

    res.send("+918409604685");

});


/*
API 
get = read
post = create
put = update 
delete = delete 
*/

/*
The callback function has 2 parameters, request(req) and response(res). me request object(req) represents 
the HTTP request and as properties for the request query string, pameters, body, TTP headers, etc.

similarly, the response object represents the HTTP response hat the Express app sends when it receives an HTTP request.
*/

app.listen(8000 , ( ) => {
    console.log("listening on port at 8000");
});