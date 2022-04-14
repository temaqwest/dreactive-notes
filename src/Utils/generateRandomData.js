import { randomWords } from "./arrayOfRandomData";

export function getCurrentDateTime() {
    return `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
}

export function getRandomName(words) {
    const result = [];

    for (let i = 0; i < words; i++) {
        let randWord = randomWords[Math.floor(Math.random() * randomWords.length)];

        randWord = randWord.split('').map((char, idx) => {
            return idx === 0 ? char.toUpperCase() : char;
        }).join('');

        result.push(randWord);
    }

    return result.join(' ');
}