let item = "beautiful";
const reddu = item.slice(5);

console.log(reddu);

// question 2
const food = "i was feeling hungry today";
let me = "eat";
var pos = 5;
var line = [food.slice(0, pos)+ " " +me+  food.slice(pos)];

console.log(line);

// question 3
const story = "The quick brown fox jumps over the lazy dog";
let num = (story.match(/the/g) || []).length;
console.log(num);

let num2 = (story.match(/brown/g) || []).length;
console.log(num2);

// question 4
const string1 = "we are now going to school";
const value = "now";
console.log(`The word  "${value}" ${string1.includes(value)? "is" : "is not"} in the sentence`);
const string2 = "The child was sitting on the table before it fell";
const word = "sitting";
console.log(`The word  "${word} " ${string2.includes(word)? "is" : "is not"} in the sentence`);

// question 5 
let a = "wonderful";
let result = a.toUpperCase();
console.log(result);

let b = "amazing";
let ans = b.toLowerCase();
console.log(ans);

let c = "BEneath";
let answer = c.toLowerCase();
console.log(answer);



const d = "A beautiful wedding"
const e = d.split(" ")
.map(w=>w[0].toUpperCase () + w.substring(1).toLowerCase())
.join(" ");
console.log(e);


