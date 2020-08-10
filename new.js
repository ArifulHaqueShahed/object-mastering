//after coming ES6 class had been using for creating object

class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 2500);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 3000);
console.log(friendlyPerson)



//before ES6 come following process is used for creating object 

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1('Grand', "Papa", 1200);
console.log(oldPerson)