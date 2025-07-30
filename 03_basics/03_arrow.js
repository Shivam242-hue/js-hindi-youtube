const user = {
    username: "shivam",
    price: 1999,

    welcomeMassage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this)
    }
}
// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username = "shivam"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
    let username = "shivam"
    console.log(this);
    
}
//chai()

// const addTwo = (num1,num2) => {
// return num1 + num2
// }

// console.log(addTwo(3,4));


//const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username:"shivam"})

console.log(addTwo(3,4));

