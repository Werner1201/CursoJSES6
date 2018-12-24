//Valores padrao sao para definir valores caso eles nao sejam identificados na funcao
const soma = (a = 0, b = 0) => a+b;

console.log(soma(1));
console.log(soma());