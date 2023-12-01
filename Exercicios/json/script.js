const objs = [
    {"nome": "Mathues",
    "esta trabalhando": true,
    "hobbies": ["livros,"]},



        {"empresa": "empresa"}
    
] 

//JSON
// converter objeto para json
const jsonData = JSON.stringify(objs);
console.log(jsonData);

//converter json para objeto

const objData = JSON.parse(jsonData);
console.log(objData)
objData.map((pessoa) =>{
    console.log(pessoa.nome)
})