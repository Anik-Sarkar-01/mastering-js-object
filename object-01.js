//Object can contain two things -
    // 1.property
    // 2.Method

// ----------------------------------------------1.Using object literal(!Important)-----------------------------------
//Example-01
//Declaring object
const player = {};
//setting object properties
player.name = 'samll nirob';
player.speciality = 'batsman';
//Object method
player.bat = function(name){
    console.log('swing your bat');
}
// console.log(player);
// player.bat();

//Example-02
const person = {
    firstName: "john",
    lastName: "Doe",
}
// console.log(person);

//-------------------------------------------2.Using object constructor----------------------------------------
//Declaring Object
const person1 = new Object();
//Adding the properties on person1 object
person1.firstName = 'john';
person1.lastName = 'doe';
// console.log(person1);

//--------------------------------------------3.Using Constructor Function--------------------------------------
function Car(model,price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon',32);
// console.log(tesla);

//-------------------------------------------4.Using ES6 Classes (!Important)----------------------------------------------------
class Person2 {
    name = 'abul';
    address = 'sador ghat';
    constructor(age){
        this.age = age;
    }
}
const Person3 = new Person2(56);
// console.log(Person3);

//------------------------------------------5.Using object.create()---------------------------------------------
const person5 = {
    name: 'john Doe'
}
const person6 = Object.create(person5);
// console.log(person6);