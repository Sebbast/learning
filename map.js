const notas = [10,9,8,7,6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota: ++nota);
//nota++: retorna nota primeiro e depois soma +1       ++nota: soma +1 primeiro e depois retorna nota;  
console.log(notasAtualizadas);

//o metodo map retorna uma array atualizada, enquanto o foreach não retorna nada, apenas executa o que está dentro do bloco;