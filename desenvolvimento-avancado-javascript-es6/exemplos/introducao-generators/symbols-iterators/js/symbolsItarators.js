// symbols - Well know symbols
const uniqueId = Symbol('Hello')

// Well know symbols
Symbol.iterator;
const arr = [5, 6, 7, 8, 9]
const str = "Digital Innovation One"

const obj = {
    values: [5, 6, 7, 8, 9],
    [Symbol.iterator]() {
        let i = 0

        return {
            next: () => {
                i++
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

for (let value of obj) {
    console.log(value);
}

// spread
const arr2 = [...obj]
console.log(arr2);


// Symbol.split;
// Symbol.toStringTag;

// const arr = [1, 2, 3, 4, 6]
// for (let value of arr) {
//     console.log(value);
// }
// const str = "Digital Innovation One"
// for (let value of str) {
//     console.log(value);
// }



// const it = arr[Symbol.iterator]()

// while (true) {
//     let { value, done } = it.next()


//     if (done) {
//         break
//     }
//     console.log(value);
// }


// const uniqueId = Symbol('Hello')

// const obj = {
//     [uniqueId]: 'Hello'
// }
// console.log(obj);

// const uniqueId2 = Symbol('Hello')
// console.log(uniqueId === uniqueId2);