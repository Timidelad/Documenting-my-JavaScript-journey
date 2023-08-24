// JS string search
let text = "please locate where locate occurs";
let textin = text.indexOf("locate");
console.log(textin) //string search indexOf
console.log(text.lastIndexOf("locate")) // string search for lastIndexOf
console.log(text.lastIndexOf("james")) // -1 will be return if we search for pattern that does not exist in the string
console.log(text.indexOf("locate", 15)) //indexOf with a second parameter
console.log(text.lastIndexOf("locate", 15)) //lastIndexOf with a second parameter
console.log(text.search("locate")) // search() method
console.log(text.search(/locate/)) // search() method using regex

let txt = "The rain in SPAIN stays mainly in plain";
console.log(txt.match(/ain/)) // match() method
console.log(txt.match("ain")) // match() method with RegEx pattern
console.log(txt.match(/ain/g)) // match() method with RegEx pattern that contains global search
console.log(txt.match(/ain/gi)) // match() method with RegEx patterns that contains global case-insensitive search

let int = "The rain in SPAIN stays mainly in plain";
let it = int.matchAll("ain");
console.log(Array.from(it)) // matchAll() metthod
console.log(Array.from(int.matchAll(/ain/gi))) // matchAll() method with a global case sensitive method

console.log(int.includes("mainly"))  // includes() method
console.log(int.includes("mainly", 31)) // includes() method that includes second parameter

console.log(int.startsWith("The")) // startsWith() method
console.log(int.startsWith("SPAIN", 12)) // starstsWith() method that includes second parameter
console.log(int.endsWith("plain")) // endswith() method 
console.log(int.endsWith("SPAIN", 17)) // endsWith() method that includes second parameter. NOTE: endswith() with a parameter start counting its position from 1 to the specified number and not from 0

//REGULAR EXPRESSION
let regtext = "hello world";
console.log(regtext.search("world")) // using string search() method with a string
console.log(regtext.search(/world/i)) // using string search() method with a REGEXP
console.log(regtext.replace("world", "Nigeria")) // using string replace() method with a string
console.log(regtext.replace(/world/i, "Nigeria")) // using string replace() method with a RegExp

let reg = "The fat cat ran down 234 the trep street rere. It was searchings for a mouse to eat."
let newline = "The fat cat ran down the trep street.\nIt was searching for a mouse to eat" // string with new line  [\n] = this is the sign for new line
console.log(reg.match(/e+/g)) // "e+" means match "e" and more than one "e"
console.log(reg.match(/ea?/g)) // "ea?" means, match "e", but if there is an "ea", match it too
console.log(reg.match(/re*/g)) // It will match "r", "re", and whereever there is "r" and multiple "e"
console.log(reg.match(/.at/g)) // It will macth "at" and the character before it
console.log(newline.match(/.+/)) // It will match all the text string without text that contains a new line tag
console.log(newline.match(/.+/s)) // It will match all text including sting with a new line tag
console.log(newline.match(/t../g)) // I t will match "t" and two characters after "t" but will not extend to new line\
console.log(reg.match(/\./g)) // it will match the dot(.) in the string
console.log(reg.match(/.\./g)) // it will match the character before our dot(.)
console.log(reg.match(/\w/g)) // it will match all the word charavter in the string
console.log(reg.match(/\s/g)) // it will match all the white-space in the string
console.log(reg.match(/\w{4}/g)) // it will match all the text that is >= 4, it will return the 4 letters and continue like that
console.log(reg.match(/\w{4,5}/g)) // it will match all the text that is >= 4, but will return 5 letters and 4 letters
console.log(reg.match(/[fc]at/g)) // it will match any character that has "at" and "f" or "c"  before it
console.log(reg.match(/[a-z]at/g)) // it will match any character that has "at" and any letter that falls between "a to z" before it
console.log(reg.match(/[a-zA-Z]at/g)) // it will match any character that has "at" and any letter that falls between "a to z" or "A-Z" before it
console.log(reg.match(/[0-9]at/g)) // it will match any character that has "at" and any letter that falls between 0-9
console.log(reg.match(/(t|T)/g)) // it will match any character that has "t" or "T"
console.log(reg.match(/(t|T)he/g)) // it will match any character that has "t" or "T" and "he" after it
console.log(reg.match(/(t|e|r){2,3}/g)) // it will match character that has t,e, and r consecutively at least two character and at most 3 character
console.log(reg.match(/(t|e|r){2,3}\./g)) // it will match character that has t,e,r and dot (.)
console.log(reg.match(/(re){2,3}/g)) // here, "re" is seen as a single character. So it will match character with two or three "re" consecutively together
console.log(reg.match(/re{2,3}/g)) // it will match character that has "r" with 2 or 3 "e"
console.log(reg.match(/^T/g)) // it will match charcater that has "T" at the begining of the string
console.log(reg.match(/^T/gm)) // it will match character that has "T" at the beginning of every new line
console.log(reg.match(/\.$/g)) // it will match character that has dot (.) at the end of every string
console.log(reg.match(/\.$/gm)) // it will match character that has dot (.) at the end of every new line
console.log(reg.match(/(?<=The\s)fat/g)) // it will return fat if it precede "The"
console.log(reg.match(/(?<!The\s)fat/g)) // it will return fat if it does not precede "The"
console.log(reg.match(/ran(?= down)/g)) // it wil return "ran" if "down" precede it
console.log(reg.match(/ran(?! down)/g)) // it will return "ran" if "down" does not precede it
console.log(reg.match(/\d/g)) // it will match all the number in the string
console.log(3 +  +"3") 
const pattern = /e/;
console.log(pattern.test(reg))
console.log(/e/.exec(reg))
console.log(100 + 50 * 3) // multiplication is done first
console.log(50 + (43 * 13)) // calculation inside parentheses is done first
console.log(50 * 45 / 23) // operation with same precedence is done from left to right
console.log(new Date("june 5, 2022")) // it create a date with a specific date, if new is removed, it returned the exact date at the moment
let num = 23;
console.log(num++) // this will return 23
console.log(num) // this will return 24, because the num++ of the previous line will take effect here
console.log(++num) // this will return 25 because ++num will increase the result of the previous line by 1
const person = {
    name:"Timi",
    car:"jeep",
    color:"black"
};
console.log(person.name)
console.log(person?.song)

// comparison and logical operation
// comarison operator is used to determine the equality and differences between variables or values
const x = 5;
const y = 6;
console.log(x == 5) // this means x is equal to 5 [true]
console.log(x == "5") // this means that x is equal to "5"[true]
console.log(x == 8) // this means that x is equal to 8 [false]
console.log(x === 5) // this means that x is equal to thesame value and type of 5 [true]
console.log(x === "5") // this means that x is equal to thesame value and type of "5" [false]
console.log(x != 5)  // this means that x is not equal to 5 [false]
console.log(x != 8) // this means that x is not equal to 8 [true]
console.log(x !== 5) // this means that x is not equal to thesame value and type of 5[false]
console.log(x > 8) // this means that x is greater than 8 [false]
console.log(x < 8) // this means that x is less than 8 [true]
console.log(x >= 8) // this means that x is greater than or equal to 8
console.log(x <= 8) // this means that x is less than or equal to 8
// logical operator is used to determine the logic between values or variables
console.log(x < 10 && y > 1) // the && operator will return true if both expressions are true, otherwise it returns false
console.log(y == 5 || x == 5) // the || operator will return true if one of the expression or both expressions are true, otherwise, it will be false
console.log(!(y > 10)) // the ! operator return false for true statement and true for false statement
const votingAge = 20;
let voteable = (18 <= votingAge) ? "Eligible" : "Not Eligible";
console.log(voteable)
let name = null;
let def = "missing";
let result = name ?? def;
console.log("The name is " + result)

//JS if, else, else if, switch
const hour = 30;
if ( hour > 0 &&  hour < 12 ) {
    console.log('Hello world')
} else if ( hour >= 12 && hour < 20) {
    console.log("hello Nigeria")
} else {
    console.log("Hello Ekiti")
}

//js switch
let roll = 2;
switch(roll) {
    case 1:
        roll = console.log("this is roll 1");
        break;    
    case 2:
        roll = console.log('this roll 2'); 
        break;
    case 3:
        roll = console.log('this roll 3');
        break;
    case 4:
        roll = console.log("this roll 4");
        break; 
    default:
        console.log("the number $(rol) is not possible")   
}

//jS array array allows variables to hold more than one value
const cars = ["volvo", "BMW", "porche"]; // creating an array using the array literal, thats one of the fastest way to create an array 
console.log(cars)
const car = [];
car[0] = "lambo";
car[1] = "ferrari";
car[2] = "toyota";
console.log(car)
const names = new Array("yemi", "bimpe", "shade"); // creating an array using the "new" keyword
console.log(names)
console.log(names[0]) // array value is accessed using the index number
names[0] = "bunmi"; // replacing an element with another element
console.log(names)
const nam = names.toString(); // converting the array into string, because originally, the typeof an array is object
console.log(typeof nam)
console.log(nam)
console.log(names.length) // this will return the number of element contained in the array
console.log(names[names.length -1])
names.push("kunle"); // adding an element to the array element
console.log(names)
names[names.length] = "tunde"; // another method to add an element to the array element
console.log(names)
console.log(names instanceof Array) // how to know if a variable is an array
console.log(Array.isArray(names)) // another method to know if a variable is an array

//javascript Array method
console.log(names.length); // this will return the lenght(size) of the array
console.log(names.toString()); // it will convert an array into a string
names.pop(); // how to remove the last element of an array
console.log(names)
names.push("blessing"); // how to add element to the end of an array
console.log(names)
names.shift() // how to remove an element from the beginning of an array
console.log(names)
names.unshift("segun") // how to add an element to the beginning of an array
console.log(names)
names[0] = "oba";
console.log(names) // how to replace an element with another element
names[names.length] ="israel";
console.log(names)
delete names[1];
console.log(names)
names[1] = "yetunde";
console.log(names)
const myGirls = ["shade", "funmi", "lydia"];
const myBoys = ["tunde", "oba", "ade"];
console.log(myBoys.concat(myGirls)); // how to merge arrays together to create another array. To join multiple arrays together, use (myArray1.concat(myArray2,myArray3))
console.log(myBoys.concat("itunu")) // how to merge array with a value
const myArr = [[1,2],[3,4],[5],[6,7]];
console.log(myArr.flat()) // how to create new array with sub-array element
console.log(names)
names.splice(2,0, "remilekun", "adekunle"); // splice is used to add new element and it can be used to remove elements too. what this statement mean is that the two new element "remilekun and adekunle" will be added from index 2, 0 element will be removed
console.log(names)
console.log(names.slice(2)) // it slice out piece of an array into a new array
const number = [1, 2, 3, 4, 5];
console.log(number.join(',')) // join() is used to concatenate array elements into a string using specified seperation
console.log(names)
console.log(names.sort()) // sort() is used to arrange element in ascending order
console.log(names.reverse()) /// reversr() is used to arrange element in descending order
console.log(number.sort(function (a,b){return a-b})) // this is used to arrange numbers in ascending order
console.log(number.sort(function(a,b){return b-a})) // this is used to arrange number in descending order