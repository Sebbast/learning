const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 6.5];

const reprovados = alunos.filter(( alunos,indice) => notas[indice] < 5 );

console.log(`reprovados ${reprovados}`);