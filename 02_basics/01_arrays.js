// arrays

const myArray = [0,1,2,3,4]
const myheros = ["Papa","mammi"]
const myArray2 = (0,1,2,3,4)
//console.log(myArray);
// console.log(myArray[0])

     //Array methods

//    myArray.push(6)
//    myArray.push(7) 
//    myArray.pop()
//     console.log(myArray);

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(9))

const newArray = myArray.join()
// console.log(myArray)
// console.log(newArray)

//  slice, splice

console.log("A",myArray)
const myn1 = myArray.slice(1,3);

console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3);
console.log("C",myArray);
console.log(myn2);