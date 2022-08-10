const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "77777777777777",
    email: "@email.com",
    fones: ["8794564", "12345678"]
}

//cliente.fones.forEach(fone => console.log(fone));
/*acessou o dado fones da const cliente, "fones" é uma array, dessa forma podemos usar qualquer metodo de array que quisermos
ao acessar os dados desejados no clientes.fones.metodo*/

//objetos em objetos

cliente.dependentes = [{
    nome: "Cleiberson Marcolas",
    parentesco: "Filho",
    nascimento: "31/12/0001"
}]


//lista de objetos

//o objeto por maior que seja é considerado apenas um índice do array

cliente.dependentes.push({
    nome: "Geferson Marcolas",
    parentesco: "Filho",
    nascimento:"01/01/0001"
})  

const filhoMaisVelho = cliente.dependentes.filter(dependente => dependente.nascimento==="01/01/0001");
//filtrar, foi acessado o dado nascimento o que será retornado no console.log será o nome do dependente que tiver o dado nascimento==="01/01/0001" 

console.log(filhoMaisVelho[0].nome);