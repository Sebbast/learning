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
 }]
}

function encheroSaco(obj){
    const suavida = Object.keys(cliente);
    if(suavida.includes("dependentes")){
        console.log("uau que muleque bacana, hein? Seria uma pena se acontecesse algo com ele")
    }else {console.log("nvm")};

}
encheroSaco(cliente);

//object.values(cliente) para pegar os valores de um objeto