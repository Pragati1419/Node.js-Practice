const  fs = require('fs');

fs.writeFileSync("note.txt" , "sucessfully created by node.js !");

fs.appendFileSync("note.txt", " I am Pragati :)")