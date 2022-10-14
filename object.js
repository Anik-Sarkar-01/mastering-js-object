//Object can contain two things -
    // 1.property
    // 2.Method

// 1. using object literal (!Important) : Example-01
//Declaring object
const player = {};
//setting object properties
player.name = 'samll nirob';
player.speciality = 'batsman';
//Object method
player.bat = function(name){
    console.log('swing your bat');
}
console.log(player);
player.bat();

//Example-02
const person = {
    firstName: "john",
    lastName: "Doe",
}
console.log(person);
