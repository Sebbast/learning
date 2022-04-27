//boolean
//dois valores: ou true ou false(sempre escrita com letra minúscula)
const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy
//elementos que são classificados pelo javascript como true ou false 
//exemplo:
// 0 => false
// 1 => true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);
//null 
//undifined

let varIndefinida;
let varNula = null;
console.log(varIndefinida);
console.log(varNula);

let numero = 3
let texto = "manga"

console.log(typeof varIndefinida)
console.log(typeof varNula)

//object que está definido no varNula é um bug que não será concertado no futuro, pois exigiria reestruturar toda a linguagem.

//conversão implicita
//-permite que seja convertido um tipo de dado em outro
const novoNumero = 456;
const novoNumeroString = "456";

console.log(novoNumero === novoNumeroString);//comparando um número com texto(type diferentes)
console.log(novoNumero == novoNumeroString);//converteu o número em string e comparou os dois 
// no javascript temos:
// "=" atribui valor à uma variável
// "==" comparação pelo valor
// "===" valor e o tipo
console.log(novoNumero + novoNumeroString);//vira uma concatenação pois os dois números são convertidos em string, não somando os valores

//conversão explicita


//Number()-converte string em number
//String()-converte number em string
console.log(novoNumero + Number(novoNumeroString));//caso haja um caractere que não seja um número na variável que deseja-se converter em number o resultado será NaN

