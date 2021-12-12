// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // gets rid of punctuation, filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

    //sort by length
    const sorted = wordArr.sort(function (a, b) {
        return b.length - a.length
    })
    // if multiple words then, put into array
    const longestWordArr = sorted.filter(function (word) {
        return word.length === sorted[0].length
    })
    //Check if more than one array value
    if (longestWordArr.length === 1) {
        //return word
        return longestWordArr[0]
    } else {
        return longestWordArr
    }

}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    //initialize a chunked array
    const chunkedArr = [];
    //set index for loop
    let i = 0;
    //loop while index is less than array length
    while (i < arr.length) {
        //slice out from index to the index + the chunk length
        //push onto chunked array
        chunkedArr.push(arr.slice(i, i + len))
        //increment by chunk length
        i += len;
    }
    return chunkedArr;
}

//************************* */
// SOLUTION 2 - forEach()
//************************* */
function chunkArray(arr, len) {
    //initialize array
    const chunkedArr = []

    //loop through array
    arr.forEach(function (val) {
        //get last value
        const last = chunkedArr[chunkedArr.length - 1]

        //check if there is a last and if last length is equal to the chunk len
        if (!last || last.length === len) {
            chunkedArr.push([val])
        } else {
            last.push(val)
        }
    })
    return chunkedArr;
}


// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    //a is starting point and each iteration is b
    //need to concat b onto a
    return arrays.reduce(function (a, b) {
        return a.concat(b)

    })
}

//************************* */
// SOLUTION 2 - .apply()
//************************* */
function flattenArray(arrays) {
    return [].concat.apply([], arrays)

}


// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) { }

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) { }

// Call Function
const output = longestWord('Hello, my name is Brad');

console.log(output);