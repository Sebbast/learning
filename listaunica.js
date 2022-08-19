const clientes = [
    {
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
     }]
    },
    {
        nome: "Andrea",
        idade: 63,
        cpf: "8888888888888",
        email: "com.email@",
        fones:["4654978","87654321"],

        dependentes: [{
            nome: "Mleiberson Carcolas",
            parentesco: "Filha",
            nascimento: "01/12/3100"
        }]
    }
    
]
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.log(listaDependentes);
//espalhou as infomações dos clientes no caso em relação aos dependentes dentro de uma nova array listando no caso os dependetes, no caso não há separação de qual dependente pertence a qual objeto.

console.table(listaDependentes);
