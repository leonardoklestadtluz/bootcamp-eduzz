class app {
    constructor() {
        this.bind()
    }

    bind() {
        document.querySelector('.add-button').addEventListener("click", () => {
            this.handleClick(1)
        })

        //debugger;
        document.querySelector('.subtrain-button').addEventListener('click', () => {
            this.handleClick(-1)
        })
    }

    handleClick(val) {
        const counterEl = document.querySelector('.counter')
        const value = parseInt(counterEl.innerText)

        counterEl.innerText = value + val
    }

}

new app()

// console

console.log('Black text');
console.warn('Yellow text with alert');
console.error('Red error text');


console.trace('Traz informaçõe de onde o código foi executado');

console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');

console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time')
}, 2000)

console.table(['Leonardo Klestadt Luz', 'Digital Innovation One']);
console.assert(1 === 0, '   [ERROR]: Opss!')
console.log('%c styled log', 'color: blue;');