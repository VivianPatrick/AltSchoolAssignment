//  Using the FS module:Create directory/folder named: “Students”

 const fs = require('fs');
 const path = require('path');

// //Create directory/folder named: “Students”
// const dir =path.join(__dirname, 'Students');

// fs.mkdir(dir, (err) => {
//     if(err)
// {
//     console.log(err);
// }
// console.log('Directory created successfully!');
// }
// );

// In the Students directory, create a file named user.js
// const file = path.join(__dirname, 'Students', 'user.js');
// fs.open(file, 'w', (err, fd) => {
//     if(err)
// {
//     console.log(err);
// }
// console.log('File created successfully!');
// }
// );

// Update the Students directory to “Names”
// const oldDirectory = path.join(__dirname, 'Students');
// const newDirectory = path.join(__dirname, 'Names');
// fs.rename(oldDirectory, newDirectory, (err) => {
//     if(err)
// {
//     console.log(err);
// }
// console.log('Directory renamed successfully!');
// }

// );

// Add your name as content to the file user.js
// const file = path.join(__dirname, 'Names', 'user.js');

// fs.writeFile(file, 'Vivian', (err) => {
//     if(err)
// {
//     console.log(err);
// }
// console.log('File created successfully!');
// }
// );

// Update the file and add your age, sex, nationality, phone number and any other information about yourself
// 

// Update the file user.js to {your_name}.js eg daniel_adesoji.js
// 

// Read the contents from {your_name}.js. User fs.open or fs.readFile
// const file = path.join(__dirname, 'Names', 'vivian.js');
// fs.readFile(file, 'utf8', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data)
// }
// );

// Delete the file {your_name}.js
// 

// Delete the directory “Names”
const dir = path.join(__dirname, 'Names');
fs.rmdir(dir, (err) => {
    if(err){

        console.log(err);
    }
    console.log('Directory deleted successfully!')
}
);



