const number1 = +prompt("Digite um número aleatório:")
const number2 = +prompt('Digite outro número aleatório:')

console.log('O primeiro número é maior que o segundo?', number1>number2);
console.log('O primeiro número é igual ao segundo?', number1===number2);
console.log('O primeiro número é divisível pelo segundo?', (number1%number2)===0);
console.log('O segundo número é divisível pelo primeiro?', (number2%number1)===0);
