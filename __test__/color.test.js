import { getRandomHexColor, HEX_PATTERN } from '../js/modules/index.js';

describe('Colors should be randoms', () => {
    const randomColor = getRandomHexColor();

    test('RandomColorShouldBeAnRandomHexColor', () => {
        expect(randomColor).toMatch(HEX_PATTERN);
    });
});