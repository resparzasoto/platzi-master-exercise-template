import { counter } from '../js/modules/index.js';

describe('Counts should be incremental', () => {
    const factory = counter(1);
    const contador = factory();

    test('IdShouldBeOne', () => {
        expect(contador.getId() === 1).toBeTruthy();
    });

    test('CountShouldBeZero', () => {
        expect(contador.getCount() === 0).toBeTruthy();
    });

    test('CountShouldBeTwo', () => {
        contador.count();

        expect(contador.getCount() === 1).toBeTruthy();
    });

    test('IdShouldBeNotChange', () => {
        expect(contador.getId() === 1).toBeTruthy();
    });
});