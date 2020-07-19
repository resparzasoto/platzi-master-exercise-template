const arrayOfCharacters = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F',
];

const getCharacterForHexColor = index => arrayOfCharacters[index];

const getRandomNumberOfCharacter = () => Math.round(Math.random() * 14);

const getRandomHexColor = () => {
    let hexColor = '#';

    while (hexColor.length < 7) {
        hexColor += getCharacterForHexColor(getRandomNumberOfCharacter());
    }

    return hexColor;
}
const counter = id => {
    let count = 1;

    return displayMessage = () => {
        console.log(`Id:${id}, Count:${count}`);
        count++;
    }
}

const onclick = ev => {
    const counter = arrayOfCounters.find((e) => e.id === Number(ev.currentTarget.id));
    counter.count();
    ev.stopPropagation();
    console.log("I'm not propagating");
    ev.currentTarget.style.backgroundColor = getRandomHexColor();
    ev.currentTarget.style.color = 'white';
}

const arrayOfCounters = [];
const listOfButtons = document.getElementsByTagName('li');

for (let index = 0; index < listOfButtons.length; index++) {
    const button = listOfButtons[index];

    const count = counter(index);
    arrayOfCounters.push({
        id: index,
        count: count,
    });

    button.id = index;
    button.addEventListener('click', onclick);
}