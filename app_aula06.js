//nessa aula vamos aprender a entregar pra um usuário um arquivo html

//quando o usuário faz uma requisição ao servidor a gente processa essa requisição e de acordo com o que o usuário solicitou vamos responder a requisição dele com um determinado conteúdo

var http = require("http");

//fs = file system - permite abrir arquivos, ler seu conteúdo e escrever esse conteúdo na saída do browser (response), no caso o arquivo 'index.html'
var fs = require("fs");

http.createServer(function(request,response){

    fs.readFile("index2.html", function(erro,conteudo){

        if(erro){
            console.log(erro);
        }
        else{
            response.write(conteudo);
        }
        response.end();
    })

}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");
