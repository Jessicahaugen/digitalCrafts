// var = variable at a global level. 
// let integer = 2 l ocalized variable
// const variable that cannot be changed 

// let and const have a block scope var has a functional scope

// function (num1,num2) {

//     for (let index = 0 , counter<arry.length; index++)

//     const element = array[index]
// }

// Lexical scoping = cariables declared outside or inside of a function are accessable to children of that function as long as the variable is definied outside of the function varibales defined inside a function only exist inside that function 
// objects are key values accessed by .notation. if the key does not exist create it using .notation and =

let newVar = "my variable";

let newCar = ["mazda", "maserati", "mercedes"];

let otherCar = {"oldcar": "toyota"};

let integer = 12;

let newString = "this is my string";

newString = "just kidding this is my string";

let multiply = (integer * 5 );


let newArray = ["swag", 123123, true, false, "boolean"];
 console.log(newArray[0])
 console.log(newArray[3])
 console.log(newArray[4])
 console.log(newArray.length)


 let newObject = {
    jessica: {
      name: "jessica",
      age: "Houston",
      height:7.1,
      metric:"feet",
    },
    whitney: {
      name: "whitney",
      age: "Houston",
      height:5.6,
      metric:"feet",
    },
      
    tay: {
      name: "tay",
      age: "Houston",
      height:7.1,
      metric:"feet",
    },

    joey: {
      name: "joey",
      age: "Houston",
      height:6.0,
      metric:"feet",
    },
    michael: {
      name: "michael",
      age: "Houston",
      height:12,
      metric:"feet",
    },
    
  };

  console.log(newObject.jessica.name);
  console.log(newObject.michael.age);
  console.log(newObject.tay.height);
  newObject.tay.height = 1.2;
  newObject.tay.metric = "meters";
  newObject.whitney.sport = "Baseball";


