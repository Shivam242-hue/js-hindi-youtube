// primitive

// 7 type : string, number, boolrarn, null, undefined, symbol,BigInt

const scor = 100;
const scorValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 13123144141444141n

// Reference (non primitive)

// arry, objects, functions

const heros = ["shaktman","naagrag","doga"]
let myObj = {
    name: "shivam",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);

//****************************************************************************

// stack(primitive), heap (non-primitive)

let myYoutubename = "shivamkush@.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


