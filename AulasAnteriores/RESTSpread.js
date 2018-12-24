//Operadores Rest e Spread

//REST serve pra pegar o resto das propriedades.

const usuario = {
    nome: 'Werner', 
    idade: 23,
    empresa: 'Unigranrio',
};

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params){
    return params;
}

console.log(soma(1, 3, 4, 5));


//SPREAD ele pega as info de um array e passa para outra estrutura de dados
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
    nome: 'Werner',
    idade: 19,
    empresa: 'Unigranrio'
};

const usuario2 = { ...usuario1, nome: 'Lidia'};
console.log(usuario2);