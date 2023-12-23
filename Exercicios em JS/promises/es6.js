const umaPromessa = new Promise((resolve, reject) =>{
    let soma = 1 + 1
    if (soma === 2){
        resolve('Tudo certo')
    }else{
        reject('Deu Ruim')
    }
})

console.log('esperando promise...')

umaPromessa.then((resultado) => {
    console.log(`valor do then: ${resultado}`)

}).catch((erro) => {
    console.error(`Valor do catch: ${erro}`)
}).finally(() => {
    console.log(`Independente do resultado eu sempre estarei aqui`)
})

console.log("isso vai ser logado antes da promise")