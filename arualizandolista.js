const listaDeChamada = ['joão', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 
'Aline', 'Fabiana', 'Andre','Carlos', 'Paulo', 'Bia', 'Vivian', 
'Isabela', 'Vinicius', 'Renan','Renata','Daisy','Camilo'];
       //numero da lita //numero de elementos removidos //elemento que irá substituir //pode ser usado sem o terceiro parâmetro 
listaDeChamada.splice(2,2,'Rodrigo');
//se não quiser nenhum elemento removido mas quer acrescentar um novo elemento em determinado lugar, pode fazer como no exemplo:
//listaDeChamada.splice(2,0,'Rodrigo'); 

console.log(`lista de chamada:: ${listaDeChamada}`);