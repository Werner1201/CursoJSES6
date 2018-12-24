//Heranca
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


// Classes 
class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Werner';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
    
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function() {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();