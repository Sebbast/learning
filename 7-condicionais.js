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

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true

// if (idadeComprador >= 18){
//     console.log("maior de idade");
// }else if(estaAcompanhada){
//         console.log("comprador esta acompanhado");
//         listaDeDestinos.splice(1,1);
//         console.log(listaDeDestinos);
//     }else{
//         console.log("não posso vender");
//     }


if (idadeComprador >= 18||estaAcompanhada==true){
    console.log("maior de idade");
    listaDeDestinos.splice(2,1)
    }else{
        console.log("menor de idade, não posso vender");
    }
console.log(listaDeDestinos)

console.log("Embarcando: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("boa viagem")
}else{
    console.log("você não pode embarcar")
}