const name = "shivam"
const repoCount = 50


// console.log(name+repoCount+"value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8 ,4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam/.com/shivam%20kushwaha"
console.log(url.replace('%20', '_'));

console.log(url.includes('shivam'));
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));



















