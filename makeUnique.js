
// Write your solution below:
const makeUnique = (string) => {
    let newStr = "";
    let arr = string.split("")
    for(let i = 0; i< string.length; i++){
        for(let j = i + 1; j < string.length; j++){
            if (arr[i] === arr[j]){
                arr.splice(j, 1)
            }
        }
    }
    console.log(arr)
    newStr = arr.join("");
    return newStr;
}


    
console.log(makeUnique('helloworld'))