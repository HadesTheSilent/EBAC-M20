// Testes para a função calcularMDC
function calcularMDC(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

describe('calcularMDC', () => {
    test('deve calcular o MDC de 24 e 18', () => {
        expect(calcularMDC(24, 18)).toBe(6);
    });

    test('deve calcular o MDC de 48 e 18', () => {
        expect(calcularMDC(48, 18)).toBe(6);
    });

    test('deve calcular o MDC de 100 e 50', () => {
        expect(calcularMDC(100, 50)).toBe(50);
    });

    test('deve retornar o próprio número quando o segundo é 0', () => {
        expect(calcularMDC(15, 0)).toBe(15);
    });

    test('deve calcular o MDC de números primos entre si', () => {
        expect(calcularMDC(17, 13)).toBe(1);
    });

    test('deve calcular o MDC de números iguais', () => {
        expect(calcularMDC(42, 42)).toBe(42);
    });

    test('deve calcular o MDC de 56 e 98', () => {
        expect(calcularMDC(56, 98)).toBe(14);
    });
});
