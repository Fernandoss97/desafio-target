/* Instruções para rodar o código

  1 - Certifique-se de possuir o node.js e o npm instalados na máquina
  2 - Execute o comando 'npm install' no terminal
  3 - Execute o comando 'npm run dev' no terminal

*/


// Exercício 1
let indice = 13;
let soma = 0;
let k = 0;

while(k < indice){
  k = k + 1;
  soma = soma + k;
}

console.log(`Resposta exercício 1: soma = ${soma}`);

//Exercício 2
const valorEntrada = 5;
let i2 = 2, fib = [0, 1];


while(fib[i2-1] + fib[i2-2] <= valorEntrada){
  fib[i2] = fib[i2-1] + fib[i2-2]
  i2++
}

const result1 = fib.find((element) => element == valorEntrada)

console.log('Resposta exercício 2:')
if(result1 === -1){
  console.log(`O valor ${valorEntrada} não pertence à sequência`)
}
else{
  console.log(`O valor ${valorEntrada} pertence à sequência`)
}

/*Exercícios 3

  a)  9
  b)  128
  c)  49
  d)  100
  e)  13
  f)  27

*/

//Exercício 4
// Não consegui determinar (o enunciado parece confuso)

//Exercício 5
const str = 'brasil';
let i=0, aux=0, aux2 = str.length - 1;
let result = str.split('');

for(i=0; i < str.length/2; i++){
  aux = result[i];
  result[i] = result[aux2 - i];
  result[aux2 - i] = aux;
}

console.log(`Resposta exercício 5: ${result.join('')}`);

