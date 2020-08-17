console.log('hello world');

/* 
    variables can be var, let or const ( var is global thus problematic )
    
    below are considerations for using variables
    cannot be a reserved keyword
    cannot start with a number(1name)
    cannot contain a space or hyphen (-)
    are case sensitive
    let can be reasigned a different value
    const can not be reasigned a different value
 */

const name = 'josh';

//>>>>>var>>>>>console.log(name);

//  DATA TYPES
//  string number boolean undefined null

const lastName = 'munyoki';
const age = 27;
const male = true;
let proCoder;
const weak = null;

//ckecking properties of data types
console.log(typeof proCoder)//unidentifiedbecause no data has been assigned to the variable

//console.log(`${name.toUpperCase()} ${lastName.toUpperCase()} is a ${age} year old`);

//ARRAYS

const drinks = ['whiskey', 'scotch', 'brandy', 'bourban', 'vodka', 'spirit', 'gin', 'wine'];

console.log(drinks)

drinks.push('tequilla');

//console.log(`${name} ${lastName} loves drinking ${drinks[8]}`);

//OBJECTS

//old way of making an object

let oldShop = new Object();

oldShop.bread = 5;
oldShop.crips = 20;
oldShop.manager = "onyash";

//console.log(oldShop.manager);

// new way of making an object

let newShop = {
    bread: 50,
    crips: 20,
    manager: "omondi",
    staff: ["mindy", "bambam", "leon"],
    suppliers: {
        njoki: "bread",
        makau: "crips",
        stan: "staff uniforms"
    }
}

//adding new stuff in an already existing object

newShop.customerLocation = {
    kSchool: "kitengela",
    rSchool: "nairobi",
    kcbBank: "kitengela",
    equity: "machakos",
    amazon: "newyork",
    naivas: "nairobi"
}

console.log(newShop);

//OBJECT CONSTRUCTOR using a function

function Person(name, gender, umri, occupation) {
    this.name = name;
    this.gender = gender;
    this.umri = umri;
    this.occupation = occupation;
}

let person01 = new Person("josh", "male", "27", "media production")
let person02 = new Person("val", "female", "19", "doctor")
let person03 = new Person("yoshi", "male", "80", "driver")
let person04 = new Person("bowset", "female", "100", "demolitions man")

console.log(person01.name, person02.name, person03.name, person04.name);

//console.log(`${person01.name} is a ${person01.umri} year old ${person01.occupation} wizard`)

//LOOPS
//For loop

/*for (let counter = 0; counter <= 10; counter++) {
    console.log(`${counter} iterations of for loop`);
}*/

//WHILE LOOPS

/*let count = 0;

while (count <= 10) {
    console.log(`${count} iterations of while loop`);
    count++;
}*/

//FUNCTIONS
//old way of creating a function

function addNum(num1, num2) {
    return num1 + num2;
}

console.log(addNum(4, 2));

//Arrow functions

const minusNum = (num1, num2) => {
    return num1 - num2;
}

//or

const minusNum2 = (num1, num2) => num1 - num2;

console.log(minusNum2(4, 2));

//Constructor functions

function Persons(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    };
}

Persons.prototype.fullNames = function () {
    return `${this.firstName} ${this.lastName}`;
};

//instanciate object with constructor function

const person1 = new Persons("jamal", "khan", "male");
const person2 = new Persons("miyamoto", "musashi", "male");

//console.log(person2.fullName(), person1.fullName());

//CLASS

class Persona {
    constructor ( firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new Persona("jamal", "khan", "male");
const person4 = new Persona("miyamoto", "musashi", "male");

console.log(person4.fullName());