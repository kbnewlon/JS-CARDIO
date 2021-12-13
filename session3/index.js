// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
    //turns object into array
    let args = Array.prototype.slice.call(arguments)
    let total = 0
    //loop through numbers to add them all
    for (i = 0; i < args.length; i++) {
        // args is current value within iteration
        total += args[i]
    }
    return total;
}

//************************* */
// SOLUTION 2 - ...rest & forEach
//************************* */
// ...rest gives rest of values
function addAll(...numbers) {
    let total = 0;
    numbers.forEach((num) => (total += num))
    return total;
}


//************************* */
// SOLUTION 3 - ...rest & reduce
//************************* */
// acc starts at zero, each iteration add current value
function addAll(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur)

}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
//checks to see if i is divisible by 7
function sumAllPrimes(num) {
    let total = 0;
    function checkForPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i <= num; i++) {
        if (checkForPrime(i)) {
            total = + i
        }
    }
    return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
function seekAndDestroy(arr) {
    const args = Array.from(arguments)

    function filterArr(arr) {
        //return true if not in array(-1)
        return args.indexOf(arr) === -1
    }

    return arr.filter(filterArr)
}

//************************* */
// SOLUTION 2 - ...rest, filter, includes
function seekAndDestroy(arr, ...rest){
    //includes check to see if in array
    return arr.filter(val => !rest.includes(val))
}

//************************* */
// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() { }

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() { }

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() { }