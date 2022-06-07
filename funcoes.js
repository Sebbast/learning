// let x = "";
// console.log(x);
// x= "oi";
//Declaração de Função
// 1) declara a função
                       //string
function imprimirTexto(texto) {
    console.log(texto);
}

// 2) executa a função, uma ou mais vezes
imprimirTexto(soma(5, 5));
imprimirTexto("oioi");

// 3) três formas de se escrever funções
function soma(){
    return 2 + 2;
}
//console.log(soma())
//return deve ser a ultima linha

//parametros de função
function soma(num1, num2) {
    return num1 +num2
}
console.log(soma(2, 2));
//parâmetro x argumento

//ordem dos parâmetros

function nomeIdade (nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`; 
}
//console.log(nomeIdade(40, "Cleison"))

function multiplica(num1, num2){
    return num1 * num2;
}
console.log(multiplica(soma(5, 5),soma(4, 6)))
function nada(parametro){
    console.log(parametro);
}