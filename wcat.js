// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js -n filepath1 filepath2 filepath3
const fs = require("fs");
let inputArr = process.argv.slice(2);

let filesArr = [];
let optionsArr = [];
for(let i = 0; i < inputArr.length; i++)
{
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == '-'){
        optionsArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
    
}

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

let contentArr = content.split("\n");
console.table(contentArr);

let is_S_present = optionsArr.includes("-s");
let is_N_present = optionsArr.includes("-n");
let is_B_present = optionsArr.includes("-b");
if(is_S_present){
    for(let i = 1; i < contentArr.length; i++){
        if(contentArr[i] == "" && (contentArr[i - 1] == "" || contentArr[i - 1] == null)){
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for(let i = 0; i < contentArr.length; i++){
        if(contentArr[i] != null)
        {
            tempArr.push(contentArr[i]);
        }
    }
    console.log(tempArr);
}
// if(contentArr[i] == "" && (contentArr[i - 1] == "" || content[i - 1] == null))
// console.table(contentArr);
