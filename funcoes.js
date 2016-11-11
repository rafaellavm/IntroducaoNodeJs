function validar(login,senha){

    if(login == "rafaela" && senha == "123")
        return true;
    return false;

}

//validarUsuario que vai ser chamado lá no app_aula04.js através do exports
exports.validarUsuario = validar;
