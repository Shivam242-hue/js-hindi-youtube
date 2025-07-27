// console.log("s");
// console.log("h");
// console.log("i");
// console.log("v");
// console.log("a");

function sayMyname(){
    console.log("s");
console.log("h");
console.log("i");
console.log("v");
console.log("a");
}

//sayMyname()

// function addTwonumbers (num1,num2){
//    console.log( num1+num2);
// }

function addTwonumbers (num1,num2){

//    let result = num1 + num2
//    return result

return num1+num2
  
   
}

 const result = addTwonumbers(3,5)

 //console.log("result:",result);

 function loginUsermassage(username ="sam"){
   // if(username===undefined){
        if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
    
 }

  //console.log( loginUsermassage("shivam"));
  //console.log( loginUsermassage("shivam"));

  function calculateCartPrice(val1,val2,...num1){
    return num1
  }

  //console.log(calculateCartPrice(200,300,400));

  const user = {
    username: "shivam",
    prices : 199
  }
  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.pric}`);
    
  }
  //handleObject(user)
   handleObject({
    username:"sam",
    pric: 399
   })

const myNewArray = [200,400,100,600]
function returnSecondValue(getArry){
    return getArry[1]
}
console.log(returnSecondValue([200,400,100,600]));

  
 
