console.log(`trabalhando com listas`);
// const salvador = `Salvador`;
// const beloHorizonte = `Belo Horizonte`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Belo Horizonte`,
    `Rio de Janeiro`,
    `Acre`,
);
listaDeDestinos.push(`Angola`);

listaDeDestinos.splice(1,1)
console.log(listaDeDestinos)
console.log(listaDeDestinos[0])