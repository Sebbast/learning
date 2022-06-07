//O javascript tem tres formas de escrever variáveis que são, var, let e const 
//var altura = 5;
//var comprimento = 7;
//area = altura * comprimento;
//console.log(area)
//no exemplo acima não foi nescessário declarar a variável area da forma var area, pois o node declarou automaticamente, porém a boa prática consiste em sempre declarar
//sempre para deixar o codigo mais legivel.

// var altura = 5 
// var comprimento = 7 
// area = altura * comprimento
// var area;
// console.log(area)
//o var pode ser usado antes de ser declarado, isso acontece porque o javascript quando começa a ser executado, ele vai ler todo o programa procurando primeiro as variáveis
//do tipo var e vai carrega-las primeiro.
// let forma = "retângulo"
// let altura = 5;
// let comprimento = 7; 
// let area;

// if (forma === "retângulo"){
// area = altura * comprimento;
// } else {
//     (altura * comprimento)/2
// }

// console.log(area);
//no exemplo acima a variável let foi declarada, porém seu valor foi apenas atribuído no if. Se fosse ao contrario por exemplo: if (fomra === "retângulo"){area = altura * comprimento};
//                                                                                                                              let area
//ocorreria um erro, pois a let não permite que o valor seja definido antes da declaração de variável.

 const forma = "triangulo";
 const altura = 5; 
 const comprimento = 5;
 let area;
if (forma === "quadrada") {
    area = altura * comprimento
}else {
    area = (altura * comprimento)/2
}
console.log(area)
//para uma variável declarada com const, não é possível atribuir um valor em uma linha diferente da qual a const foi declarada.








