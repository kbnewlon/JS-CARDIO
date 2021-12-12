// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    const strArray = str.split('');
    strArray.reverse()
    return strArray.join('')
}

//************************* */
// CLEANED UP
//************************* */

function reverseString(str) {
    return str.split('')
        .reverse()
        .join('')

}

//************************* */
// WITHOUT REVERSE ARRAY METHOD
//************************* */
function reverseString(str) {
    let revString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        revString = revString + str[i]
    }
    return revString;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) { }
const revString = str.split('').reverse().join('');
return revString === str;


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('')

    return parseInt(revString) * Math.sign(int) //includes negative sign
}


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    const strArr = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() +  //javascript method that will allow you to pick first character
            strArr[i].substring(1);
    }
    return strArr.join(' ');

}


//************************* */
// USES MAP FUNCTION-MORE IMPRESSIVE
//************************* */
function capitalizeLetters(str) {
    return str.toLowerCase()
        .split(' ')
        .map(word => {
            word[0].toUpperCase() + word.substr(1)
        })
        .join(' ')

}




// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const charMap = {};
    // loop through string as array
    str.split('').forEach(function (char) {
        // if character exists add tally
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    })

    //for in loop used to loop through object instead of array
    for (let char in charMap) {

    }
}

// debugger;
// node inspect index.js
// c
// repl
// char



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() { }



// Call Function
const output = reverseString('hello');

console.log(output);

//https://youtu.be/M2bJBuaOeOQ
