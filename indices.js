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

module.exports = encontrarIndices;
