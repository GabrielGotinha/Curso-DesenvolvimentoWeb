/*const promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve ('promise 1 resolvida'), 1000);
});
const promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve ('promise 2 resolvida'), 500);
});
const promise3 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve ('promise 3 resolvida'), 100);
});

Promise.race([
    promise1, promise2, promise3,
]).then((message) => {
    console.log(message) 
})*/

const cincomil = () => new Promise((resolve, reject) =>{
    setTimeout(() => resolve('promise cincomil resolvida'), 5000)
});
const setemil = () => new Promise((resolve, reject) =>{
    setTimeout(() => reject('promise sete resolvida'), 1000)
});


const resolvedora = async () => {
    const resultado = await cincomil().then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
    console.log('codigo aqui')
    const resultado2 = await setemil().then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
    


console.log(`Mensagens: \n${resultado} \n${resultado2}`)
};

resolvedora();