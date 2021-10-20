// lazy evaluation
function randomNumber() {
    console.log("Generating a random number...");
    return Math.random() * 10
}

function multiply(a, b = randomNumber()) {
    return a * b
}
console.log("Resultado com valor atribuído: " + multiply(5));
console.log("Resultado com valor atribuído: " + multiply(5));




// função comum de multiply() referneciando o primeiro parâmetro
function multiply(a, b = a) {
    return a * b
}
console.log("Resultado com valor atribuído: " + multiply(4));

// função comum de multiply() com valor atribuído
function multiply(a, b = 1) {
    return a * b
}
console.log("Resultado com valor atribuído: " + multiply(4, 10));

// validando parâmetro com if() {}
function multiply(a, b) {
    if (typeof b === "undefined") {
        b = 1
    }
    return a * b
}
console.log("Resultado multiplicado validado com if(){}: " + multiply(3, 9));

// função comum de multiply() validando tipo
function multiply(a, b) {
    b = typeof b === "undefined" ? 1 : b;
    return a * b
}
console.log("Resultado multiplicado validado com typeOf(): " + multiply(6, 7));


// função comum de multiply() multiplicando 0 (zero)
function multiply(a, b) {
    b = b || 1
    return a * b
}
console.log("Resultado multiplicado por 0 (zero): " + multiply(6, 0));

// função comum de multiply() com usuário esqucendo do segundo parâmetro
function multiply(a, b) {
    b = b || 1
    return a * b
}
console.log("Resultado com um parâmetro: " + multiply(6));

// função comum de multiply() com os dois parâmetros
function multiply(a, b) {
    return a * b
}
console.log("Resultado com dois parâmetros: " + multiply(6, 6));