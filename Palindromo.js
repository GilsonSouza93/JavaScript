
/*palindormo*/

function verificarfrase(string) {
    if(!string) return "string inexistente";
    
    /* usando metodos encadeados */
    
    return string.split("").reverse().join("") === string;
}




console.log(verificarfrase("carro"));