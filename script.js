
const gameDB = [
    {
        question: "What is the name of this bird",
        a: "Woodpecker",
        b: "Guinea Fowl",
        c: "Spoonbill",
        d: "Columbidae",
        ans: "ans1"
    },

    {
        question: "What is the name of this fish",
        a: "Wels Catfish",
        b: "Common Carp",
        c: "European Seabass",
        d: "Sword Fish",
        ans: "ans4"
    },

    {
        question: "What is the name of this flower",
        a: "Billbergia",
        b: "Echium",
        c: "Blanket Flower",
        d: "Lantana",
        ans: "ans3"
    },

    {
        question: "What is the name of this insect",
        a: "Termite",
        b: "Wasps",
        c: "Ladybug",
        d: "Booklice",
        ans: "ans3"
    },

    {
        question: "What is the name of this pet",
        a: "Capybaras",
        b: "Prairie dogs",
        c: "Genets",
        d: "Axolotls",
        ans: "ans2"
    },

    {
        question: "What is the name of this reptile",
        a: "Spider",
        b: "Bearded Dragon",
        c: "Platypus",
        d: "None of them",
        ans: "ans2"
    },

    {
        question: "What is the name of this sea-creature",
        a: "Blackdragon Fish",
        b: "Ghost Fish",
        c: "Eerie Anglerfish",
        d: "Giant Isopod",
        ans: "ans1"
    },

    {
        question: "What is the name of this tree",
        a: "Eucalyptus",
        b: "Banyan Tree",
        c: "Aloe Vera Tree",
        d: "Sal Tree",
        ans: "ans2"
    },

    {
        question: "What is the name of this wild animal",
        a: "Hippopotamus",
        b: "Mole",
        c: "Reindeer",
        d: "Panda",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const previous = document.querySelector('#previous');
const answers = document.querySelectorAll('.answer');
const showResult = document.querySelector('#showResult');

let questionIncrement = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = gameDB[questionIncrement];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadQuestion();


const getCheckedAnswer = () => {
    let answer;

    answers.forEach((currentAnswerElement) => {
        if(currentAnswerElement.checked){
            answer = currentAnswerElement.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === gameDB[questionIncrement].ans){
        score++;
    };

    questionIncrement++;
    if(questionIncrement < gameDB.length){
        loadQuestion();
    }
    else{
        showResult.innerHTML = 
        `
        <h3>Your Score ${score}/${gameDB.length}</h3>
        <button class="btn" onclick="location.reload()">Restart</button>
        `;
        showResult.classList.remove('resultArea');
    }
    
});

previous.addEventListener('click', () => {

    questionIncrement--;
    if(questionIncrement < gameDB.length){
        loadQuestion();
    }
    else{
        return gameDB[questionIncrement == 0];
    }
    
});