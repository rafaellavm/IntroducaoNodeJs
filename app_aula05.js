//node pode ser usado pra criar aplicações web, como java, php, etc
//podemos usar somente javascript no back end da aplicação

//vamos criar uma pequena aplicação servidor que vai responder nossas requisições no browser e exibir um resultado:

//------------------------------------------------//------------------------------------------------

//primeiro importamos um pacote que nos permite fazer esse tipo de aplicação:
//por acaso é o 'http', um dos pacotes 'default' do node que já vem instalado, então é só referenciá-lo, sem fazer instalação.

var http = require("http");

//função 'createServer' que chama outra função que vai nos permitir tratar o request e o response, ou seja, a requisição feita lá no browser pelo usuário e a sua resposta

//essa função será chamada SEMPRE que o usuário fazer uma nova requisição.

//fato importante do nodejs é sua orientação a eventos

//obs: o nodejs trabalha com eventos, mas eventos DO SERVIDOR, por exemplo: quando o servidor for iniciado, quando ele for pausado, ou quando ele receber uma requisição.

//o front end costuma tratar eventos como clique de botão, etc, DIFERENTE.

//método 'createServer': sempre que o usuário fizer uma requisição devemos respondê-lo de alguma forma. Pra isso utilizamos o objeto RESPÓNSE com a função 'write', que nos permite escrever no corpo da resposta. Esse conteúdo vai ser exibido no browser.

//.listen(8081) = indica que o servidor vai estar rodando na porta 8081

http.createServer(function(request,response){
    response.write("Primeiros passos com Node.js");
    response.end();
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");


//depois de rodar no node, o processo exibe a mensagem e fica parado
//no browser após ser digitado o caminho é mostrado a mensagem do console.log

//pra parar o processo tecle no prompt: 'CTRL+C'

















