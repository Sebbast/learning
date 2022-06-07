const listaDeJogos = ['Monster Hunter Rise','MvCI','TvC','DMC5'];

const listaDePrecos = [179.99, 89.99, 'emula', 89.99];

let listasJuntas = [listaDeJogos,listaDePrecos];

function jogoePreco(nomedojogo) {
    if (listasJuntas[0].includes(nomedojogo)){
        let indice = listasJuntas[0].indexOf(nomedojogo)
        return listasJuntas[0][indice] + ' seu preço é ' + listasJuntas[1][indice]
    } else {
        return 'se o jogo não esta em nossos registros... ele não existe!'
    }
}
console.log(jogoePreco('TvC'));
