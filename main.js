let text1 = "I love mangos. mangos are the best.";
let result1 = text1.replace(/mangos/i, "oranges");
console.log(result1);

let text = "cat bat mat";
let result = text.replace(/at/g, "ow");
console.log(result);

function add(a, b) {
    return a + b
}
add = (a, b) => a + b

var a = "2"
console.log(typeof (a))

console.log(typeof (Number(a)))

var num1 = 1
var num2 = 2

console.log(num1 + String(num2))