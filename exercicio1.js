// 1. Calcule o MDC (máximo divisor comum) entre dois números.
function calcularMDC(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

const num1 = 24;
const num2 = 18;
console.log(`O MDC entre ${num1} e ${num2} é: ${calcularMDC(num1, num2)}`);
