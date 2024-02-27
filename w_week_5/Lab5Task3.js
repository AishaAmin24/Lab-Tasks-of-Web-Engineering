function applyFunction(array, fun) {
    
    return array.map(fun);
}
const numbers = [1, 2, 3];
console.log(numbers); 
const doubled = applyFunction(numbers, x => x * 2);
console.log(doubled); 
