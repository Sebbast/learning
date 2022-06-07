function apresentar(nome){
    return `meu nome é ${nome}`;
}
//arrowfunction
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2; 

//arrowfunction mais de uma linha de instrução
const somaNumPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
} 
//não confundir => com >=(maior igual)
//hoisting: arrow function se comporta como expressão
