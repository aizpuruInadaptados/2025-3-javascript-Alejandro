const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador
  const num1 = Number (await ask("Dame el primer número: "));
  const num2 = Number (await ask("Dame el segundo número: "));
  const operacion = await ask ("Dame el tipo de operación: ");

  let resultado;
  if (operacion === "+"){
    resultado = num1 + num2;
  } else if (operacion === "-"){
    resultado = num1 - num2;
  } else if (operacion === "/"){
    resultado = num1 / num2
  } else if (operacion === "*"){
    resultado = num1 * num2
  } else {
    resultado = "Resultado Invalido"
  }

  console.log ("El resultado es: " + resultado)

}

main();