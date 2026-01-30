const  name = "shuaib"
const repoCount = 4
 
// console.log(name + repoCount +"Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String("shuaib-trk")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-10,5)
console.log(anotherString)
const newStringOne = "  shuaib  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shuaib.com/shuaib%20turki"

console.log(url.replace("%20",'-'));
console.log(url.includes('sunder'));
console.log(gameName.split('-'));
