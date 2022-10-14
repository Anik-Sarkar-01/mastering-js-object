const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity:1};
// Object.keys will return the keys of an object
const keys = Object.keys(bottle);
// console.log(keys);
// Object.values will return the values of an object
const values = Object.values(bottle);
// console.log(values);
// Object.entries will return the key value pair in the form of 2D array
const pair = Object.entries(bottle);
// console.log(pair);
// To delete any property of an object - (delete object_name.property_name)
delete bottle.isCleaned;
// console.log(bottle);
// Object.seal can be used to prevent deletion and addition of object property but we can still modify the object property 
Object.seal(bottle);
// console.log(bottle);
// Object.freeze can be use to prevent any kind of deletion,additon,modification of an object 
Object.freeze(bottle);
//console.log(bottle);