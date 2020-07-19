import { getRandomHexColor, counter } from './index.js';

const arrayOfCounters = [];

const findElementInArrayOfCounters = (targetId) => arrayOfCounters.find((e) => e.id === Number(targetId));

const onclick = ev => {
    const arrayElement = findElementInArrayOfCounters(ev.currentTarget.id);
    arrayElement.counter.count();
    ev.stopPropagation();
    console.log("I'm not propagating");
    ev.currentTarget.style.backgroundColor = getRandomHexColor();
    ev.currentTarget.style.color = 'white';
}

const addClickEventListenerByTagName = (tagName) => {
    const listOfButtons = document.getElementsByTagName(tagName);

    for (let index = 0; index < listOfButtons.length; index++) {
        const button = listOfButtons[index];
        const factory = counter(index);
        const contador = factory();

        arrayOfCounters.push({
            id: index,
            counter: contador,
        });

        button.id = index;
        button.addEventListener('click', onclick);
    }
}

export { addClickEventListenerByTagName, findElementInArrayOfCounters };