//Se.2 FUP que peça dois numeros e uma operação (soma, subtração, multiplicação ou divisão) e realize o cálculo;
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação desejada (soma, subtração, multiplicação, divisão): ").toLowerCase();
let resultado;
switch(operacao) {
    case "soma":
        resultado = num1 + num2;
        break;
    case "subtração":
        resultado = num1 - num2;   
        break;
    case "multiplicação":
        resultado = num1 * num2;
        break;
    case "divisão":
        if(num2 !== 0) {
            resultado = num1 / num2;
        }
        else {
            alert("Erro: Divisão por zero não é permitida.");
            console.log("Erro: Divisão por zero não é permitida.");
            resultado = null;
        }
        break;
    default:
        alert("Operação inválida.");
        console.log("Operação inválida.");
        resultado = null;
}
if(resultado !== null) {
    alert("O resultado da " + operacao + " é: " + resultado);
    console.log("O resultado da " + operacao + " é: " + resultado);
}
