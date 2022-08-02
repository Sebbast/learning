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