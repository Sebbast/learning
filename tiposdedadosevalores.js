const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "77777777777777",
    email: "@email.com",
    fones: ["8794564", "12345678"]
}

cliente.fones.forEach(fone => console.log(fone));/*acessou o dado fones da const cliente, "fones" é uma array, dessa forma podemos usar qualquer metodo de array que quisermos
ao acessar os dados desejados no clientes.fones.metodo*/

//objetos em objetos

cliente.dependentes = {
    nome: "Cleiberson",
    parentesco: "Filho",
    nascimento: "24/12/0001"
}

cliente.dependentes.nome = "Cleiberson Marcolas";
;console.log(cliente);