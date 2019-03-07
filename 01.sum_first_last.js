function sumFirstLast(array) {
let firstElement = array.shift();
let lastElement = array.pop();
return Number(firstElement) + Number(lastElement);
}

console.log(sumFirstLast([ '5', '10', '2']));