/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma ingrediente. Ex: Queijo;
    - Importar a lista de ingredientes do arquivo ingredients.js;
    - Filtrar a palavra passada como argumento dentro da lista de ingredientes;
    - Retornar "Encontrado" de a palavra for encontrada e "Não encontrada" se não for encontrada;
    - A pesquisa deve desconsiderar se o ingrediente contem letras maiusculas, ou seja;
      - Se pesquisar: Queijo, queijo ou QuEiJo. O resultado deve ser "Encontrado"
*/

exports.ingredientsFilter = function(ingrediente) {
    let arrayIngredientes = require('./ingredients.js');

    let encontrado = arrayIngredientes.find(function(valor){
        return valor.toLowerCase() == ingrediente.toLowerCase();
    });

    return encontrado != null ? "Encontrado" : "Não Encontrado";
}