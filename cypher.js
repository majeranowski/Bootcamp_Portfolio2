// CYPHER.JS - pass your message as an argument:
console.log(cypher("Type Your Message Here"));

//function declatarin with a single argument as an input
function cypher (message) {
    let wordArr = message.split("");  //creating an array from a string passed as a function argument
    let arr = []; //new empty array that will store ASCII values of each character

    //First loop through the whole array of characters, converting strings to ASCII numeric values and adding them to the new array
    for (let i = 0; i < wordArr.length; i++) {
        arr.push(wordArr[i].charCodeAt());
    };

    //Second loop through the ASCII array with conditional statements to change the ASCII values for values
    //corresponding with only lower and upper case letter, special characters, spaces and numbers are left unchanged
    for (let j = 0; j < arr.length; j++) {
        //65 - 90 is the range of letters A - Z, math calculating what letters should be change and how
        if (arr[j] >= 65 && arr[j] <= 75) {
            arr[j] = arr[j]+15;
        }
        else if (arr[j] > 75 && arr[j] <= 90) {
            arr[j] = 65 + (arr[j] - 76); //65 is a value of A and 76 is the value of first letter that after 15th changes will be after Z
        }
        //97 - 122 is the range of letters a - z, math calculating what letters should be change and how
        else if (arr[j] >= 97 && arr[j] <= 107) {
            arr[j] = arr[j]+15;
        }
        else if (arr[j] > 107 && arr[j] <= 122) { //similar to case with capital letters
            arr[j] = 97 + (arr[j] - 108);
        };
    }

    //third loop converting ASCII values to characters.
    for (let k = 0; k < arr.length; k++) {
        arr[k] = String.fromCharCode(arr[k]);
    };

    //returning a message with encoded message, using escape characters, tabs and string concatenation
    return "\n\t CYPHER JS \n\n Task: \t Encoding Message \n Decrypted Message: \t" + message + "\n Encoded Message: \t" + arr.join("");
};

