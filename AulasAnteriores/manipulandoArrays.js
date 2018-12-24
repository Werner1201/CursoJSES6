//Operacoes em Arrays
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Map serve para percorrer o vetor e retornar algo de dentro. Ela recebe outra funcao como param.
const newArr =  arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

//Reduce consome todo vetor para uma variavel, geralmente um numero.
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

//Filter filtra com os params definidos pela sua funcao
const filter = arr.filter(function(item){
    //a expressao precisa retornar true ou false.
    return item % 2 === 0;
});

console.log(filter);

//Find, Verifica se ha aquela info no array ou para encontrar a info no array
const find = arr.find(function(item){
    //retorna tbm true ou false para a funcao find
    return item === 4;
});

console.log(find);