// async await a partir do ES7
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345678)
    }, 1000)
})

const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resStream => resStream.json())
    return dataJSON
}

simpleFunc().then(data => {
    console.log("Dados: " + data);
}).catch(err => {
    console.log(err);
})


// fetch
// fetch('data.json')
//     .then(responseStream => {
//         if (responseStream.status === 200) {
//             return responseStream.json()
//         } else {
//             throw new Error("Request error")
//         }
//     })
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log('Erro: ', err);
//     })


// fetch('/data.json').then(responseStream => {
//     console.log(responseStream);
// })