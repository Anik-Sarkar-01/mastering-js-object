// Loop through all the properties of an object 

/* for of can be used to loop through an array but not an object.
For loop through an object properties, we have two options: */

/* Three ways to read the object properties:
   01. object_name.object_property
   02. object_name['object_property']
   03. object_name[variable_name_where_object_property_is_stored]

Here we are using the third option to read the object property
*/

const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity:1};
// Option:01 - to loop through an object
// Here we will get an array of the object keys.Because Object.keys returns an array of keys.
const keys = Object.keys(bottle);
// Now we can loop through that array using for of .
for(const key of keys){
    // reading the object property
    console.log(bottle[key]);
}

// Option:02 - for in loop - (preferable). Using for in loop, we can directly loop through an object.
for(const key in bottle){
    console.log(bottle[key]);
}

// Another advanced way - using Object.entries
for(const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}