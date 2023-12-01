// sintaxe

function primeiraFun(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui")
            resolve()
        }, 1000)
    })
}

async function segundafunction(){
    console.log("Iniciou")

    await primeiraFun()

    console.log("terminou")
}
segundafunction()

// pratico

function getUser(id){

    return fetch(`http://reqres.in/api/user?id=${id}`)
        .then(data => data.json(