//routing

const express = require('express');
const app = express();
const port = 3000;

app.get('/' ,  (req, res) => {

    res.send("Welcome to my Home Page");

});

app.get('/about' ,  (req, res) => {

    res.write("Welcome to my Introduction Page");
    res.write("Welcome  again to my Introduction Page");
    res.send();
});

app.get('/Email' ,  (req, res) => {

    res.status(200).send("pragatikri31@gmail.com");

});

app.get('/Contact' ,  (req, res) => {

    res.send([{ 

        id: 1 ,
        name : "Pragati",

    }]);

});

app.listen(port ,  () => {

    console.log(`listening to the port ${port}`);
    
});

/*

The methods are identical when an object or array is passed , but
res.json() will also convert non - objects ,
such as null and undefined , which are not valid JSON 

*/
