// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js -n filepath1 filepath2 filepath3
//
const fs = require("fs");
let inputArr = process.argv.slice(2);

let filesArr = [];
let optionsArr = [];
for(let i = 0; i < inputArr.length; i++)
{
    // let firstChar = inputArr
    filesArr.push(inputArr[i]);
}
// console.log("files to be read " + filesArr);

// check if files are present

for(let i = 0 ; i < filesArr.length; i++){
    let doesFileExist = fs.existsSync(filesArr[i]);
    if(!doesFileExist){
        console.log("Files does not exist");
        return;
    }
}

// content read and appending starts

let content = "";
for(let i = 0; i < filesArr.length; i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\n";
}
console.log(content);
