// outros exemplos
var obj = {
    showContext: function showContext() {
        // console.log(this);
        // this.log("teste");

        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
}
obj.showContext()

// var obj = {
//     showContext: function showContext() {
//         console.log(this);
//         this.log("teste");

//         setTimeout(function () {
//             this.log('after 1000ms')
//         }, 1000);
//     },
//     log: function log(value) {
//         console.log(value);
//     }
// }

// obj.showContext()


// hoisnting = içamento | Hoisting não funciona para arrow functions
log("Função içada (hoisting)")

function log(value) {
    console.log(value);
}

// função construtora
function Car() {
    this.foo = "bar"
}
console.log(new Car());

// arrow functions - retrono de objetos
var createObj = () => ({ test: 123 })
console.log(createObj());

// arrow functions
var sum = (a, b) => a * b
console.log("Multiplicação: " + sum(5, 6));

// função anônima com retorno (return)
var sumOld = function (a, b) {
    return a + b
}
console.log("Soma: " + sumOld(5, 5));

// função anônima passada como referência para a variável
var log = function (value) {
    console.log(value);
}
console.log("Função anônima");

// função nomeada
function log(value) {
    console.log(value);
}
log("Função nomeada")
