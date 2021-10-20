// SPREAD OPERATOR
const obj = {
    test: 123
}

const obj2 = {
    ...obj,
    test2: "Hello"
}

const objMerged = {
    ...obj,
    ...obj2,
    chave: 'Objeto merged'
}

console.log(obj2);
console.log(objMerged);



// const str = 'Digital Innovation One'
// const arr = [1, 2, 3, 4, 5]

// function logArgs(a, b, c) {
//     console.log(a, b, c);
// }

// const arr2 = [5, 6, 7, ...arr]
// const arr3 = [...arr2, ...arr, 0, 0, 0]

// console.log(arr2)
// console.log(arr3)

// const str = 'Digital Innovation One'
// const arr = [1, 2, 3, 4, 5]

// function logArgs(a, b, c) {
//     console.log(a, b, c);
// }

// const arr2 = arr.concat([5, 6, 7])
// console.log(arr2)

// const str = 'Digital Innovation One'

// function logArgs() {
//     console.log(arguments);
// }
// logArgs(...str)

// const str = 'Digital Innovation One'

// function logArgs(...args) {
//     console.log(args);
// }
// logArgs(...str)

// REST OPERATOR
// const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

// const sum = (...rest) => {
//     return multiply.apply(undefined, rest)
// }
// console.log(sum(1, 2, 3, 4, 5));

// const sum = (a, b, ...rest) => {
//     console.log(a, b, ...rest);
// }
// console.log(sum(5, 2, 1, 3));

// function sum(...args) {
//     return args.reduce((acc, value) => acc + value, 0)
// }
// console.log(sum(10, 6, 8, 7, 12));

// // função funciona com mais de um argumento
// function sum(a, b) {
//     return a + b
// }
// console.log("Resultado: " + sum(10, 10));