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

//  data types
//  string number boolean undefined null

const lastName = 'munyoki';
const age = 27;
const male = true;
let proCoder;
const weak = null;

//ckecking properties of data types
console.log(typeof proCoder)//unidentifiedbecause no data has been assigned to the variable

//console.log(`${name.toUpperCase()} ${lastName.toUpperCase()} is a ${age} year old`);

//arrays

const drinks = ['whiskey', 'scotch', 'brandy', 'bourban', 'vodka', 'spirit', 'gin', 'wine'];

console.log(drinks)

drinks.push('tequilla');

//console.log(`${name} ${lastName} loves drinking ${drinks[8]}`);

//objects

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