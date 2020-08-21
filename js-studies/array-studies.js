const name = [
    "josh", "tula", "sido", "mandem", "bambam", "sally"
];


console.log(name);

// .length property returns the number of elements in an array
console.log(name.length);

// .length property returns the number of characters in an array element
console.log(name[0].length);

// .length property can also set the number of elements in an array
//name.length = 3;

console.log(name);

// .filter() method creates a new array with elements that pass the test implemented by the provided function
const shortName = name.filter(
    smallNames => smallNames.length <= 4
);

const longName = name.filter(
    bigNames => bigNames.length > 4
);

console.log(shortName);

console.log(longName);

// .find() method returns the value of the FIRST element in a given array that passes the provided testing function
const look = name.find(finding => finding.length >= 5);

const look2 = name.find(finding => finding == "bambam");

// .findIndex() method returns the ID of the FIRST element in a given array that passes the provided testing function
const look3 = name.findIndex(finding => finding.length >= 5);

const look4 = name.find(finding => finding == name[5]);

console.log(look, look2, look3, look4);

// .forEach() method executes a provided function once for each array element
const welcome = name.forEach(x => console.log(`hi ${x}`));

// .includes() method determines if an array has a certain value among it's elements and returns true or false accordingly
let searchName = "gitonga";

let output;

if (name.includes(searchName) === true) {
    output = `${searchName} is an active user`;
} else {
    output = `${searchName} is not an active user`;
}

console.log(output);

// .map() method creates new array populated by results of the function called on each element in the calling array
const capitalName = name.map(
    smallLetter => smallLetter.toUpperCase()
);

console.log(capitalName);

// .reduce() method applies a reduce function on all elements of an array end returns a single output

