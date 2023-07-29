// Template String é uma melhora na qualidade de escrever uma console.log concatenando de forma mais simples.
/* Vou explicar com dois exemplos de como era e como pode fica mais organizado nossos códigos.
Observe a seguir.
*/

const nome = "André";
const sobreNome = "Soares";
let idade = 21;
let pesoKg = 60;

console.log("O aluno "  + nome + " " + sobreNome + " tem a idade de " + idade + " e pesa " + pesoKg + "Kg");
// Esta é uma forma muito complicada e antiquada de escrever, vejamos a seguir uma forma mais eficiente.

console.log(`O aluno ${nome} ${sobreNome} tem a idade de  ${idade}  e pesa  ${pesoKg}Kg`);
// Esta forma fica mais fácil idêntificar o que está acontacendo.
// Lembrando que o conteúdo deve ficar entre crase para funcionar adequadamente.
