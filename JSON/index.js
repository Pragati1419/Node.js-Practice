const fs = require('fs');
/*------------------------------

JSON stands for javascript object Notations . JSON is a 
lightweight format for storing and transporting data. JSON

JSON is often used when data sent from a server to a web page.

*/

const biodata = {
    name  : "Pragati",
    age : 20 ,

};

/**
const jsonData = JSON.stringify(biodata);
console.log(jsonData);


//{"name":"Pragati","age":20}

const objData = JSON.parse(jsonData);
console.log(objData);
*/



/*--------------------------

1 convert to JSON 
2 Add to other Files
3 readFile
4 again convert back to js obj original
5 Console.log

*/

const jsonData = JSON.stringify(biodata);
fs.writeFile("json1.json" , jsonData  , (err) => {
    console.log("Done!");
});

fs.readFile("json1.json" ,  "utf-8" , (err ,data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});
