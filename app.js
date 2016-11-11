/*
//---------------------------- Aula 02 ----------------------------
var nome = "Rafaela";

function exibirMensagem(nome){
    
    console.log("Olá", nome);
}

exibirMensagem(nome);*/

//---------------------------- Aula 03 ----------------------------
//no site do npm vc conseuge ver todos os pacotes que tem pra instalar e as explicações deles.
//pra verificar a versão do npm: 
//npm -v
//pra instalar o pacote:
//npm instal <pacote>


//faz referência ao pacote instalado:
var clc = require("cli-color");

console.log(clc.green("Mensagem verde;"));

//buscando na documentação do pacote no site do npm:
console.log(clc.red.bgWhite.underline('Underlined red text on white background.'));
