const uniqueId = Symbol('Hello')

// Well know symbols

// Symbol.iterator;
// const arr = [5, 6, 7, 8, 9]
// const str = "Digital Innovation One"

// Generators
const obj = {
    values: [5, 6, 7, 8, 9],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

for (let value of obj) {
    console.log(value);
}


// function* naturalNumbers() {
//     let number = 0
//     while (true) {
//         yield number
//         number++
//     }
// }

// const it = naturalNumbers()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function* hello() {
//     console.log('Hello');
//     yield 1
//     console.log('From');
//     const value = yield 2
//     console.log(value);
// }

// const it = hello()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next('Outside!'));


// const it = hello()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());