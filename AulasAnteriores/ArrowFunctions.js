//Arrow Functions

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Funcoes anonimas como a abaixo sao os melhores lugares para utilizar arrow functions
//Qnd se utiliza 1 param na funcao pode se remover os dois parenteses
//Qnd se retorna apenas um return e nao eh uma funcao com corpo maior que uma linha, pode-se remover as chaves e colocar os valores de retorno logo apos a Arrow
const newArr = arr.map(item => item * 2);

console.log(newArr);

//Dessa forma tbm pode-se criar funcoes com arrow
const teste = () => 'Teste';
console.log(teste());

/*  Mas CUIDADO 
*   nao eh possivel retornar objetos por este meio
*   pois as chaves tbm fazem parte do corpo da funcao
*   Para fazer isso eh necessario colocar parenteses em volta do objeto
*/
const objTeste = () => ({ nome: 'Werner'});
console.log(objTeste());