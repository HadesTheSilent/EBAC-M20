const somarMultiplos = require('./soma');

describe('somarMultiplos', () => {
    test('deve retornar a soma correta de todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(somarMultiplos()).toBe(156361);
    });

    test('deve retornar um número positivo', () => {
        expect(somarMultiplos()).toBeGreaterThan(0);
    });

    test('deve retornar sempre o mesmo valor', () => {
        const resultado1 = somarMultiplos();
        const resultado2 = somarMultiplos();
        expect(resultado1).toBe(resultado2);
    });
});
