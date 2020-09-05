const name = [
    "josh", "tula", "sido", "mandem", "bambam", "sally"
];


console.log(name);

// .length property returns the number of elements in an array
console.log(".length of array", name.length);

// .length property returns the number of characters in an array element
console.log(".lenght of an array element", name[0].length);

// .length property can also set the number of elements in an array
//name.length = 3;
//console.log(name);

// .filter() method creates a new array with elements that pass the test implemented by the provided function

const longName = name.filter(
    bigNames => bigNames.length > 4
);

console.log(".filter long names", longName);

let age = [15, 18, 19, 26, 60, 36];

let old = age.filter(years => years >= 21);

console.log("original age", age);
console.log(".filter old age", old);

// .find() method returns the value of the FIRST element in a given array that passes the provided testing function
const look = name.find(finding => finding.length >= 5);

const look2 = name.find(finding => finding == "bambam");

// .findIndex() method returns the ID of the FIRST element in a given array that passes the provided testing function
const look3 = name.findIndex(finding => finding.length >= 5);

const look4 = name.find(finding => finding == name[5]);

console.log(".find", look, look2, look3, look4);

// .forEach() method executes a provided function once for each array element
const welcome = name.forEach(x => console.log(`.for each say hi ${x}`));

// .includes() method determines if an array has a certain value among it's elements and returns true or false accordingly
let searchName = "gitonga";

let output;

if (name.includes(searchName) === true) {
    output = `${searchName} is an active user`;
} else {
    output = `${searchName} is not an active user`;
}

console.log(".includes", output);

// .map() method creates new array populated by results of the function called on each element in the calling array
const capitalName = name.map(
    smallLetter => smallLetter.toUpperCase()
);

console.log(".map", capitalName);

let numbers = [1, 2.3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers = numbers.map(digit => digit * 2);

console.log(".map", newNumbers);

// .map() parameters

let jobs = ["developer", "chef", "police", "manager", "accountant"];

// value parameter
//let assignJobs = jobs.map(job => `is a ${job}`);

// index parameter
let assignJobs = jobs.map((job, index) => {
    return `${job}. Job index is ${index}`;
}
);
console.log(".map index parameter",assignJobs);

// array parameter
let assignJobs2 = jobs.map((job, index, array) => {
    return array;
}
);
console.log(".map array parameter",assignJobs2);

// thisArg parameter
/*
passed into map method itsself
sets value of this inside callback function
does not work with arrow functoins for some reason
eg
    b.map(function(){
        blabla   
    }thisArg
    );
*/

let assignJobs3 = jobs.map(function (job, index) {
    
    return `${this.name} is a ${job}. Job index is ${index}`;
}, {
    name: "josh",
    age: 27
});
console.log(".map(thisArg)",assignJobs3);

// .reduce() method applies a reduce function on all elements of an array end returns a single output

