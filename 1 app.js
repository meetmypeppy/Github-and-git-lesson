// /* Object Literal >> normal

// const person ={
//     name
// }
//  */

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }


// const bob = new Person('bob', 36);
// const john = new Person('john', 26);
// console.log(john);


//  CONSTRUCTOR AND THIS. KEY WORD
// PERSON CONSTRUCTOR

function Person(name, dob) {
    this.name = name;
    this.birthday = new Date();
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        // console.log(Date.now());
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1991);
    }
};

const bob = new Person('Peppu', '5-21-1998'); // Constructor is new "P"erson
const bob1 = new Person('Yppep', '5-31-1998');

// console.log(bob.calculateAge());

// console.log(bob1.calculateAge());
console.log(bob.calculateAge());
// console.log('Printt')