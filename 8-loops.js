console.log(`trabalhando com listas`);

const listaDeDestinos = new Array(
    `Belo Horizonte`,
    `Rio de Janeiro`,
    `Acre`,
);
listaDeDestinos.push(`Angola`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Acre";


const podeComprar = idadeComprador >= 18||estaAcompanhada==true;
console.log(listaDeDestinos);

let contador =0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true
        break;
        console.log("destino existente");
    }
    contador +=1
    }

console.log("destino existe: ", destinoExiste)
if(destinoExiste && podeComprar){
    console.log("vai la meu filho");
}else{
    console.log("desculpe ocorreu um erro :(")
}

for(let i = 0;i < 3 ;i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true
        console.log("destino existente");
    }
    contador +=1
    }