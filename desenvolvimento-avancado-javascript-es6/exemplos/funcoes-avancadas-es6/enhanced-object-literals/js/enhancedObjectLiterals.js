// outra forma de encurtamento
var propName = "test"

var obj = {
    [propName + "concat"]: "prop value"
}
console.log(obj);

// função declada direto no método, mas agora está encurtada
var obj = {
    sum(a, b) {
        return a + b
    }
}
console.log("Mesma função encurtada: " + obj.sum(1111, 2222));

// função declada direto no método
var obj = {
    sum: function sum(a, b) {
        return a + b
    }
}
console.log("Resultado: " + obj.sum(10, 10));

// Valor passado através de variável ocultando a chave do objeto
var method1 = "Valor passado através de variável ocultando a chave do objeto"

var obj = {
    method1
}
console.log(obj);

// Valor passado através de variável
var teste = "Valor passado através de variável"

var obj = {
    teste: teste
}
console.log(obj);

// Valor atribuído na propriedade do objeto
var obj = {
    prop1: "Valor atribuído na propriedade do objeto"
}
console.log(obj);