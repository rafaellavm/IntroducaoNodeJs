//importando o módulo funcoes.js
// o ponto e a barra indicam que estou importando um arquivo, não um módulo
//esse módulo fica visível dentro aqui pela variável 'funcoes':
var funcoes = require("./funcoes.js");

//acessa o funcoes.js através do exports, o método validarUsuario
var resultado = funcoes.validarUsuario("rafaela", "123");

console.log(resultado);
