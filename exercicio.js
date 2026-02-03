// 1. Calcule o MDC (máximo divisor comum) entre dois números.
function calcularMDC(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

// 2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
function encontrarIndices(arr) {
    if (arr.length === 0) return null;
    let maxIdx = 0;
    let minIdx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIdx]) maxIdx = i;
        if (arr[i] < arr[minIdx]) minIdx = i;
    }
    return { maxIdx, minIdx };
}

// 3. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.
function somarMultiplos() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

// Testes
console.log("--- Exercício 1: MDC ---");
console.log("MDC(24, 18):", calcularMDC(24, 18));
console.log("MDC(10, 5):", calcularMDC(10, 5));

console.log("\n--- Exercício 2: Índices Maior/Menor ---");
const arrayTeste = [10, 5, 20, 8, 3];
const indices = encontrarIndices(arrayTeste);
console.log("Array:", arrayTeste);
console.log("Índice do maior:", indices.maxIdx);
console.log("Índice do menor:", indices.minIdx);

console.log("\n--- Exercício 3: Soma Múltiplos 5 ou 7 (< 1000) ---");
console.log("Soma:", somarMultiplos());
