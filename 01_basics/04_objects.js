// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "shivam"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "shivam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shivam",
            lastname: "kushwaha"
        }
    }
}
 //console.log(regularUser.fullname.userfullname.firstname);

 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
 //const obj3 = {obj1,obj2};

//const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3 = {...obj1,...obj2,...obj4};
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "shivam@gmail"
    },
     {
        id: 1,
        email: "shivam@gmail"
    }
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));


const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor: "shivam"

}

// course.courseInstructor

const{courseInstructor: instructor} = course
console.log(instructor);

// json
// {
//     "coursename":"js in hindi",
//     "price":"999",
//     "courseInstructor": "shivam"
 
//}



