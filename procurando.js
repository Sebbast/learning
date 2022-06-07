const listaDeAlunos = ['Amanda','Juliana','Caio','Ana'];

const notasDeAlunos = [10,7,9,6];

let listaNotasDeAlunos = [listaDeAlunos,notasDeAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaNotasDeAlunos[0].includes(nomeDoAluno)){
        indice = listaNotasDeAlunos[0].indexOf(nomeDoAluno)
        return listaNotasDeAlunos[0][indice] + ' sua média é ' + listaNotasDeAlunos[1][indice]
    } else {
        return 'Aluno não cadastrado'
    }
}
console.log(exibeNomeNota('Ana'));