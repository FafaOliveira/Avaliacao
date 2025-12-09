//28. FUP que leia 10 números e verifique quantos destes números são negativos;
let i;
let numero;
let contadorNegativos = 0;
for(i = 1; i <= 10; i++) {
    numero = Number(prompt("Digite o " + i + "º número: "));
    if(numero < 0) {
        contadorNegativos++;
    }
}
alert("A quantidade de números negativos é: " + contadorNegativos);
console.log("A quantidade de números negativos é: " + contadorNegativos);
