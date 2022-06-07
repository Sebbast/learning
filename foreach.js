const notas = [10, 6.5, 8, 7.5];

let notasSomadas = 0;

notas.forEach(nota => {
    notasSomadas += nota
})

let media = notasSomadas/notas.length;

console.log(media);
//Essa função tem o nome de callback e vai ser executada para cada elemento do array,
//sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.