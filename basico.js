//>>tipos de dados: os tipos de javascript podem ser divididos em duas categorias, tipos primitivos e tipos objetos.
//>sempre que quisermos guardar um dado qualquer, seja números ou caracteres, etc, usamos uma variável





const meuNumero = 3;
const primeiroNumero = 6;
const segundoNumero = 2;

const morteAoPresunto = meuNumero * (primeiroNumero / segundoNumero) + " anarquia caralhoooooooo";
console.log(morteAoPresunto)
//>constante é um nome que criamos para designar um espaço na memória que guarda um dado especifico, no exemplo acima meuNumero é um dado do tipo número e o 
//valor atribuído a ele é o 3  

//>>dados primitivos:


//...........numeros: 123 - + = adição, - = subtração, * = multiplicação, / = divisão. 

//trabalha com números positivos, negativos, inteiros e decimais
//ponto flutuante = números decimais ( usar o "." para definir números decimais não a ",")
const numeroPontoFlutuante = 3.3;
const numeroPontoFlutuante2 = .5;

const contaFlutuante = numeroPontoFlutuante + numeroPontoFlutuante2
console.log(contaFlutuante)
//NaN = Not a Number
const palavra = "mandibola";
console.log(palavra * primeiroNumero);
//dica: pode-se usar o número PI através do código Math.PI
//divisão por zero não é um erro em javaScript ele retorna "Infinity" com exceção do zero dividido por zero que não tem um valor definido sendo definido por NaN
console.log(7/0);
console.log(0/0);
//classe Math.round() = arrendonda números decimais
//classe toFixed()= arredonda o número de acordo com o número de casas decimais definidas, por exemplo: toFixed(2) mostraria duas casas decimais (50.25),
//vale ressaltar que é arredondado sempre para cima (11.123 se torna 11.12 e em 20.555 se torna 20.56). Mais um ponto importante é que seu retorno será uma
//string representando o número
//Math.ceil() = retorna o número inteiro que é maior que o número passado, exemplo: Math.ceil(11.123) o valor fica 12
//Math.floor() = retorna um número inteiro que é menor que o número passado, exemplo: Math.floor(11.789) o valor fica 11
console.log(Math.ceil(11.666))
//links: https://www.alura.com.br/artigos/formatando-numeros-no-javascript / https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona


//...........strings: textos e caracteres
const texto1 = "ola mundo";
const texto2 = 'ola mundo';
const senha = "senhaSuperSegura8000?";
//tudo colocado entre " " ou ' ' é considerado uma string
const citacao = "meu nome é ";
const meuNome = "Norbet";
console.log(citacao + meuNome);
//é comum usar "" junto com '' no caso de citações
//templade string ou template literal 
//concatenation: juntar duas partes de texto utilizando o operador +(serve para somar numeros e para concatenar texto), exemplo: const palavra = nome + sobreNome

//...........boolean: verdadeiros ou falsos
const umNumero = 5;
const doisNumero = 6;
let cadastroAtualizado
console.log(umNumero === doisNumero);
//comparação entre valores
//exemplo prático: se a senha de um usuario === usuario digitou, então pode acessar a página
const textoUm = "A";
const textoDois = "a";
console.log(textoUm === textoDois)
//javascript é case sensitive (A =\= a)

//............Null e undefined
//null pode ser definido como a ausência de valor e pode ser atribuído como o valor de uma variável
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}
//null é um valor atribuído à uma variável na qual esta atribuído a ausencia de valor, undefined é quando nada foi atribuído à uma variável.
//exemplo: let input = null;
//         let input; 
console.log(null == undefined); // true
console.log(null === undefined); // false
//== avalia o resultado para definir se é igual, === avalia o resultado e também o tipo, por isso type number quando comparao a type string = false
var contaUM = "4"
var contaDois = 3+1
console.log (contaUM==contaDois)