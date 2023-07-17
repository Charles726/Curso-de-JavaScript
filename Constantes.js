// Não podemos criar constantes com palavras reservadas.
// Constantes precisamter nomes significativos.
// Não podemos começar o nome de uma constante com um número.
// Não podem conter espaços ou traços.
// Utilizamos camelCase.
// Case-Sensitive.
// Não pode modificar o valor de uma Constante.
// Não utiliza var, utilize Const.

const nome="João"; // Deve ser criada e declarada.
// Não pode ser Redeclarada.
// Caso precise alterar uma constante modifique para let.
//Exemplo:

const primeiroNumero = 5;// Constante usando camelCase.
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
// Alterando o valor da constante, usamos let como declaração de variável.

let resultadoTriplicado = resultado * 3;// A constante resultado sendo alterada.
console.log(resultadoTriplicado);

//Quando queremos saber o tipo de variável está sendo utilizada, usamos typeof, Ex:
console.log(typeof primeiroNumero); // Veremos a resposta do tipo: Number.
console.log(typeof nome); // Veremos a resposta: String.
