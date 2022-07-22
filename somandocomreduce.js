const salaJS = [7, 8, 9, 8, 7, 9, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 4, 3, 2];
const salaPython = [10, 10, 10, 10, 10, 9.5, 0];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSala.length    
}
console.log(`a nota da sala de javascript é ${mediaSala(salaJS)}, a nota da sala de java é ${mediaSala(salaJava)} e a de python ${mediaSala(salaPython)}`);