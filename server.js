const express = require('express');

const server = express();

server.use(express.json());

const produtos = [
    {nome: 'Arroz' , quantidade: 2},
    {nome: 'Feijao' , quantidade: 1}
]

server.get('/produto', function(request, response) {
    response.json(produtos);
})

server.post('/produto', function(request, response){

    //const nome = request.body.nome;
    //const quantidade = request.body.quantidade;

    const {nome, quantidade} = request.body;

    produtos.push({nome , quantidade});
    response.status(204).send();
})

server.put('/produto/:id', function (request, response){
    const {id} = request.params;
    const {nome, quantidade} = request.body;

    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].nome == id){
            produtos[i].nome = nome;
            produtos[i].quantidade = quantidade;
            break;
        }
    }
    response.status(204).send();
})

server.delete('/produto/:id', function (request, response){

    const {id} = request.params;

    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].nome == id){
            produtos.splice(i, 1);
            break;
        }
    }
    response.status(204).send();
})

server.listen(process.env.PORT || 3000);