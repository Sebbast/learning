const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "77777777777777",
    email: "@email.com",
    fones: ["8794564", "12345678"],

dependentes : [
    {
    nome: "Cleiberson Marcolas",
    parentesco: "Filho",
    nascimento: "31/12/0001"},
 {
    nome: "Geferson Marcolas",
    parentesco: "Filho",
    nascimento:"01/01/0001"
 }
],
    saldo: 5000,  
    depositar: function(valor){
    this.saldo += valor
}
}
console.log(cliente.saldo);

cliente.depositar(500)
console.log(cliente.saldo);

let relatorio ="";

for (let info in cliente){
    if (typeof cliente[info]==="object" || typeof cliente[info]==="function")
    
    {
        continue
    }else{
        relatorio += `
        ${info} ===> ${cliente[info]} `
    }
}
console.log(relatorio);