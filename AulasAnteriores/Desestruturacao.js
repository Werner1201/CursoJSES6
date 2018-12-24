//Desestruturacao de Objetos
const usuario = {
    nome: 'Werner',
    idade: 19,
    endereco: {
        rua: 'Capitao Pereira Lago',
        num: 49,
        bairro: 'Lagunas e Dourados',
        cidade: 'Duque de Caxias',
        uf: 'RJ',
    }, 
};

console.log(usuario);

// Baseia-se nesse principio o de dizer os atributos e depois associalos ao objeto.
const { nome, idade, endereco: {cidade} } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }){
    console.log(nome, idade);
}

mostraNome(usuario);