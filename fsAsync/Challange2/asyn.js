// Challenge Time
// 1: Create a folder named it Thapa
 // 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder


const fs = require('fs');


//creating new folder named Challange2


fs.mkdir(" challange2" , (err) => {
    console.log("Folder Created");
});

// creating a new bio named bio.text



fs.writeFile("bio.txt" , "I am Pragati :)" , (err) => {
    console.log("File is Created");
});



//Add more Data into the file at the end of the existing data

fs.appendFile("bio.txt" , " My age is 20 years"  , err => {
    console.log("Age is Added");
});



//Read the data without getting the buffer data

fs.readFile("bio.txt" , "utf-8" , (err, data) => {
    console.log(data);
});


//Rename the file to the new

fs.rename("bio.txt" , "mybio.txt" , err => {
    console.log("rename file");
});


//Delete the file 

fs.unlink("bio.txt" , (err) => {
    console.log("file deleted");
});