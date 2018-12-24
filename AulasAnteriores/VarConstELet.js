//Variaveis, Constantes e Variaveis de Escopo
//A const nao pode ter seu valor reatribuido
const usuario = {nome: 'Werner'};

//Na constante podemos mutar seus valores mas nao reatribui-los
usuario.nome = 'Lidia';
console.log(usuario.nome);

//Variaveis de Escopo
function teste(x){
    //let eh a "KeyWord" para variaveis de Escopo
    let y = 2;

    if(x > 5){ // Com o let eh possivel apenas reatribuir seu valor caso seja no mesmo escopo ou um subescopo de que foi criado
        y = 4;
        console.log(x, y);
    }
}//A abertura e fechamento de chaves eh chamada de escopo

teste(10);