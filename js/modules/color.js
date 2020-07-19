const HEX_PATTERN = /^#[A-Fa-f0-9]{6}/;

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

export { getRandomHexColor, HEX_PATTERN };