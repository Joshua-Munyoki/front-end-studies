const staff = {
    name: "momo",
    role: "CEO",
    email: "josh@gmail.com",
    age: 27,
};

console.log(staff);

//annonymous functions are assigned to a variable but are not named
//if assigned to a let the value is changable if a new value is assigned to the let

const logedIn = (name) => {
    name = staff.name;
    return `hello ${staff.name} you are logged in`;
}

console.log(logedIn());

//classes are templates for creating objects( objects with similar properties but many instances )

class NewStaff {
    constructor(name, role, email, age) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.age = age;
        this.logIn = (name) => {
            name = this.name;
            return `${name} is logged in`;
        };
    }
}

const staff1 = new NewStaff("josh", "CEO", "josh@gmail.com", 27);
const staff2 = new NewStaff("momo", "Chef", "momo@gmail.com", 21);

console.log(staff1.logIn());
