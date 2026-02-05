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

const arrayTeste = [10, 5, 20, 8, 3];
const resultado = encontrarIndices(arrayTeste);
console.log(`Array: [${arrayTeste}]`);
console.log(`Índice do maior valor: ${resultado.maxIdx}`);
console.log(`Índice do menor valor: ${resultado.minIdx}`);
