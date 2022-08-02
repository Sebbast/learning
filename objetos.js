//const listaCPFs = ['123132132','123132132132','72149831816654']; arrays são para quando temos que organizar informações do mesmo tipo

//const cliente = ['nome', 'Gerfersongers','idade',36]// arrays não funcionam para organizar dados dessa forma.

const cliente = {
    
    nome: 'Gefersongersemengermenjanson',
    idade: 800,
    cpf: '000000000001',
    email:'Gefersongersemengermenjanson@gmail.com.br.uk.usa.nois'//não esquecer da ","

}
//objeto: fazer uma abstração de algo da vida real, exemplo, vários dados de um cliente ficam armazenados dentro do objeto "cliente"

console.log(`meu nome é ${cliente.nome}
minha idade é ${cliente.idade}
meu cpf ${cliente.cpf}
e meu unico meio de comunicação é ${cliente.email} não se esqueça`);

const chave = ["nome","idade","cpf","email"];// objeto cliente[chave[aqui dentro precisa de algo que tenha os mesmos caracteres do que foi definido em cliente]]
//caso chave tenha um nome diferente como chave = ["coisa", "idade","cpf","email"], console.log(cliente[chave[0]]) constará undefined

console.log(cliente[chave[0]]);

//chave.forEach(coisa => console.log(cliente[coisa]));

//adicionando
console.log(cliente);
cliente.fone = "456878932";
console.log(cliente);
 cliente.fone = "999999999";
 //substitui o valor anteriormente atribuido
 console.log(cliente);

 //deletar
 const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
   delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined