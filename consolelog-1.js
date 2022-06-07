/**console.log--->log = registro */

const minhaVar = true

console.log(123)
console.log("string")
console.log(minhaVar)

//tratamento de erro
console.error("wrong")

/**O console.log é um dos métodos utilizados para exibir informações no terminal, quando estamos desenvolvendo aplicações e nos mostra as informações que desejamos ver
 * que estão entre parênteses console.log(informação).
 * Existem outros metodos de fazer isso:
 * console.error()> exibe mensagens de erro;
 * console.table()> para vizualizar de forma mais organizada informações tabulares;
 * console.time() e console.timeEnd()> para temporarizar o tempo que uma operação de código leva para ser iniciada e concluída;
 * console.trace()> para exibir stacktrace de todos os pontos(arquivos chamados) por onde o código passou durante a execussão;
 */
 console.log("deu erro");
 console.error(new Error("deu erro"));
