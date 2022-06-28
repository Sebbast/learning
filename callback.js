const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0

notas.forEach(function(nota){
  somaDasNotas += nota;
})

let media = somaDasNotas/notas.length;

console.log(media);

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes[i]);
}
