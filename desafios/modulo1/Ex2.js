const usuarios = [{
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    },
];
//Idades
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//Filtro
const filtro = usuarios.filter((usuario)=>(usuario.idade >= 18 && usuario.empresa === 'Rocketseat'));
console.log(filtro);

//Find
const search = usuarios.find((usuario)=> usuario.empresa === 'Google');
console.log(search);

//2.4 Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

const duplica = usuarios.map(function(usuario){
    usuario.idade = usuario.idade * 2;
    return usuario;
});

const filUser = duplica.filter(usuario => (usuario.idade <= 50)? usuario : false);
console.log(filUser);
