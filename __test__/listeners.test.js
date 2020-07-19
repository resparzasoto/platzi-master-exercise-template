import { addClickEventListenerByTagName, findElementInArrayOfCounters } from '../js/modules/index.js';

describe('Navbar Items Should Be Counters', () => {
    addClickEventListenerByTagName('body');
    const element = document.getElementById('0');
    element.style.backgroundColor = 'rgb(255, 255, 255)';
    element.click();

    test('ShouldBeChangeTheBackgroundColor', () => {
        expect(element.style.backgroundColor !== 'rgb(255, 255, 255)').toBeTruthy();
    });

    test('CounterCountShouldBeOne', () => {
        const arrayElement = findElementInArrayOfCounters(element.id);
        expect(arrayElement.counter.getCount() === 1).toBeTruthy();
    });
});