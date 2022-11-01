// Challenge Time
// 1: Create a folder named it Tha
 // 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

const fs = require('fs');

//creating new file

fs.writeFileSync("bio.txt" , " Bio  ,  My name is Pragati");

//Add more data to the file

fs.appendFileSync("bio.txt", " I am a Developer");

//read the data without buffer data

const buff_data = fs.readFileSync("bio.txt");
org_data = buff_data.toString();
console.log(org_data);

//Rename the file

fs.renameSync("bio.txt", "mybio.txt");


