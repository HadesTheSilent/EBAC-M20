const encontrarIndices = require('./indices');

describe('encontrarIndices', () => {
    test('deve encontrar os índices do maior e menor valor', () => {
        const resultado = encontrarIndices([10, 5, 20, 8, 3]);
        expect(resultado.maxIdx).toBe(2);
        expect(resultado.minIdx).toBe(4);
    });

    test('deve funcionar com array de um único elemento', () => {
        const resultado = encontrarIndices([42]);
        expect(resultado.maxIdx).toBe(0);
        expect(resultado.minIdx).toBe(0);
    });

    test('deve retornar null para array vazio', () => {
        expect(encontrarIndices([])).toBe(null);
    });

    test('deve funcionar com números negativos', () => {
        const resultado = encontrarIndices([-5, -1, -10, -3]);
        expect(resultado.maxIdx).toBe(1);
        expect(resultado.minIdx).toBe(2);
    });

    test('deve funcionar quando o maior está no início', () => {
        const resultado = encontrarIndices([100, 50, 75, 25]);
        expect(resultado.maxIdx).toBe(0);
        expect(resultado.minIdx).toBe(3);
    });

    test('deve funcionar quando o menor está no início', () => {
        const resultado = encontrarIndices([1, 50, 75, 100]);
        expect(resultado.maxIdx).toBe(3);
        expect(resultado.minIdx).toBe(0);
    });

    test('deve funcionar com números decimais', () => {
        const resultado = encontrarIndices([1.5, 3.7, 0.2, 2.9]);
        expect(resultado.maxIdx).toBe(1);
        expect(resultado.minIdx).toBe(2);
    });
});
