// Assincronismo
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
})

//Antes
//minhaPromise().then(response => ...);

//async await torna muito mais facil trabalhar assincronismo a partir do ES8
//Quando se usa Async automaticamente a funcao se torna uma promise
/* async function executaPromise(){
    //Isso faz a mesma coisa que o .then
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    
}
 */
//Da pra fazer com arrow Function
const executaPromise = async () =>{
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
} 
executaPromise();