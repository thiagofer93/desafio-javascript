/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: Anderson;
    - Retornar a palava invertida. Ex: nosrednA
*/
exports.invertWord = function(palavra) {
    let palavraInvertida = "";
    for(i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    return palavraInvertida;
}

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: ana;
    - Deve retornar true se a palavra for um palindromo;
    - Deve desconsiderar se a letra é maiuscula ou minuscula.
*/
exports.isPalindrome = function(palavra) {
    let palavraInvertida = "";
    for(i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    return palavraInvertida === palavra.toLowerCase();
}

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array de frutas. Ex: ['maça','banana'];
    - Deve inserir 'kiwi' no final do array;
    - Deve remover o primeiro item do array;
    - Deve inserir 'goiaba' no inicio no array;
    - Deve retornar o resultado;
  OBS: Devem ser utilizados as funções necessarias de manipulação de array (push, shift, unshift, ...)
*/
exports.fruits = function(frutas) {
    frutas.push('kiwi');
    frutas.shift();
    frutas.unshift('goiaba');

    return frutas;
}