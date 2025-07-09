const name = "sakshi"
const repoCount = 3

//  console.log(name + repoCount + "value");

console.log(`hello ${name} and my repocount ${repoCount}`);

const gameName = new String('sakshiii');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);


const url = "https://www.google.com?user=sakshi&id=1234&age=20";

comsole.log(url.replace('%20', '-'))

