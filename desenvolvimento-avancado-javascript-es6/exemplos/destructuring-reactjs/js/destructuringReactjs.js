// destructuring assignment
var arr = [{ name: 'Apple', type: 'fruit' }]
var obj = {
    name: "leonardo",
    props: {
        age: 36,
        favoriteColors: ["black", "blue"]
    }
}


// destructuring
var [{ name: fruitName }] = arr
console.log(name);



// var obj = {
//     name: "leonardo",
//     props: {
//         age: 36,
//         favoriteColors: ["black", "blue"]
//     }
// }

// var {
//     props: { age, favoriteColors: [color1, color2] }
// } = obj
// console.log(age, color1);


// var obj = {
//     name: "leonardo"
// }

// var { name } = obj
// console.log(name);

// var [apple2, banan2, orange2, [tomato2]] = ["Apple", "Banana", "Orange", ['tomato2']]
// console.log(apple, apple2);


// forma antiga
// var obj = {
//     name: "leonardo"
// }

// var name = obj.name
// console.log(obj);


// var arr = ["Apple", "Banana", "Orange", ['tomato']]

// var apple = arr[0]
// var banana = arr[1]
// var orange = arr[2]
// var tomato = arr[3][0]

// console.log(arr);