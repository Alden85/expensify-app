/*
const person = {
  name:'Andrew',
  age: 26,
  location:{
    city:'Philadelphia',
    temp:92
  }
};

*/

  //const  { name = 'Ananymous'/*this is setting default value for name */, age} = person;  //ES 6 destructuring . On right is the object we are destructuring and on left are the properties we are getting from the person object.
//const {city, temp} = person.location;

//console.log(`${name} is ${age}.`);

/*const book = {
  title:'Ego is the Enemy',
  author:'Ryan Holiday',
  publisher:{
    name:'Penguin'
  }
}


const {name:publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);
*/

const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];
//destructure the array below
const [street , city, state, zip] = address; //what goes inside 
//the const [] is an ordered list of variable names
//street is not matching it by name but by position in array, 
//street is the 1st thing we defined so its matching it to the 1st item in the address array.
//const [, , state, zip] = address;  --> this would just destructure 'state' of the address array... 
//you must leave the commas , like we see in they array in this comment.
//const [, , state = 'New York', zip] = address;  --> setting up defaults for array destructuring.
console.log (`You are in ${city},${state}`);

const item = ['Coffee (hot)','$2.00','$3.50','$2.75'];
const [coffeeType, ,medium] = item;

console.log(`A medium ${coffeeType} costs ${medium}`);