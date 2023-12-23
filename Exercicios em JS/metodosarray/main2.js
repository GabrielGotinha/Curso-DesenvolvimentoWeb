/**METODOS DE OBJETOS */

/*const dest = {
    a:1,  b:2
};
const obj2 = dest;

const destretur = Object.assign({}, dest)

console.log(destretur)*/

/* outro jeito de usar o assign mesclagem de objetos */

/*const o1 = {a: 1}
const o2 = {b: 2}
const o3 = {c: 3}

const obj = Object.assign(o1, o2, o3);
console.log(obj)*/

const obj = {
    "Abc": 2,
    'oasjf': 2
}

const keys = Object.keys(obj)
const value = Object.values(obj)

console.log(keys, value)