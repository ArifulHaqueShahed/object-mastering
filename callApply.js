const normalPerson = {
    firstName : "Rahim",
    lastName : "Uddin",
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips -tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName : "Hero",
    lastName : "Balam",
    salary : 30000,
}

const friendlyPerson = {
    firstName : "Hero",
    lastName : "Golam",
    salary : 30000,
}


normalPerson.chargeBill.call(heroPerson, 200, 100, 20);
normalPerson.chargeBill.call(heroPerson, 200, 300, 40);
console.log(heroPerson.salary)

normalPerson.chargeBill.apply(heroPerson,  [200, 300, 40]);
normalPerson.chargeBill.apply(heroPerson, [200, 300, 40]);
console.log(heroPerson.salary)


//normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// console.log(heroPerson.salary)

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(3000);
// console.log(friendlyPerson.salary)



// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// normalPerson.chargeBill(850);
// console.log(normalPerson.salary);