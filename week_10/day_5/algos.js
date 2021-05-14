// Write a function that accepts a number as an argument. The function should then return the factorial of that number. A factorial of a number means to multiply all whole numbers between that number in one. Example: 5! => 5 * 4 * 3 * 2 * 1 = 120.

// write functino 
// find nums between 0 and num multiply nums 
// 1.) 
//cheated on this one: 
// function factorial(n)
// {
//     return (n == 1 || n == 0) ? 1 :
//             n * factorial((n - 1));
// }
// console.log(factorial(10));





//object.entries will convert a multi level object to a array
const obj = {
    person: {
        name: 'Tyler',
        age: 28,
        height: '180cm'
    },
    hobbies: {
        sport: 'Football',
        game: 'Overwatch'
    }
}

const objectToArray = () => Object.entries(obj);

console.log(objectToArray(obj))

// 3.)

// a callback functon essentially calls another function that is written within the iniatal function or within itself as an arguement. 



