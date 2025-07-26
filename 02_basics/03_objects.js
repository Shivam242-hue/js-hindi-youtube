 // singleton
 //object.create

 // object literals

 const mySym = Symbol("key1")

 const jsUser = {
   name: "shivam",
   "full Name": "shivam kushwaha",
   age: 17,
   [mySym]: "mykey1",
   location: "teonthar",
   email: "shivam@gmail.com",
   isLoggedIn: false,
   lostLoginDay:["monday","saturday"]

}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full Name"])
// console.log(jsUser[mySym])

// jsUser.email = "kushwaha@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "kushwahachat.com"
// console.log(jsUser)


jsUser.greeting = function(){
  console.log("hello js user");
}
jsUser.greeting2 = function(){
  console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


