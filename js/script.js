const NUMBER_OF_LEVELS = 3;
const AUTHORS = ['bacik', 'terka'];
const SOUNDS = [
    {
        title: "I'm hungry!",
        file: "food"
    },
    {
        title: "That's my toy!",
        file: "give_my_toy"
    },
    {
        title: "Let's go out!",
        file: "hhh"
    },
    {
        title: "I'm a very good boy!",
        file: "pisky_pisk"
    }
]

let copy = SOUNDS.slice(0);
let currentLevel = 1;
const resultModal = document.getElementById('result');
const finalScore = document.getElementById('final-score');
const roundNum = document.getElementById('round-num');
const roundTitle = document.getElementById('round-title');
let currentAuthor = AUTHORS[getRandomIndex()];
let currentSound = new Audio(`assets/audio/${currentAuthor}_${getRandomSoundFile()}.wav`);
let points = 0;
roundNum.textContent = currentLevel;
roundTitle.textContent = SOUNDS[currentLevel].title;

function playAudio() {
    currentSound.play();
}

function submitAnswer(answer) {
    if (answer === currentAuthor) {
        points++;
    }
    // Get ready for next level
    if (currentLevel < NUMBER_OF_LEVELS) {
        currentLevel++;
        roundNum.textContent = currentLevel;
        roundTitle.textContent = SOUNDS[currentLevel].title;
    } else {
        finalScore.textContent = `${points}/${NUMBER_OF_LEVELS}`;
        resultModal.showModal();
    }
    currentAuthor = AUTHORS[getRandomIndex()];
    currentSound = new Audio(`assets/audio/${currentAuthor}_${getRandomSoundFile()}.wav`);
}

function getRandomIndex() {
    const ARRAY_LENGTH = AUTHORS.length;
    return Math.floor(Math.random() * ARRAY_LENGTH);
}

function getRandomSoundFile() {
    if (copy.length < 1) { copy = SOUNDS.slice(0); }

    let index = Math.floor(Math.random() * copy.length);
    let item = copy[index].file;

    copy.splice(index, 1);

    return item;
}
