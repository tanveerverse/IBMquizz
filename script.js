document.addEventListener('DOMContentLoaded', () => {
    const levels = document.querySelectorAll('.ocean-level');
    const twinkleCount = 100;

    levels.forEach(level => {
        for (let i = 0; i < twinkleCount; i++) {
            const twinkle = document.createElement('div');
            twinkle.classList.add('twinkle');
            twinkle.style.top = `${Math.random() * 100}%`;
            twinkle.style.left = `${Math.random() * 100}%`;
            twinkle.style.animationDelay = `${Math.random() * 2}s`;
            level.appendChild(twinkle);
        }
    });
});

const questions = [
    {
        question: "How deep can barreleye fish live in the ocean?",
        options: ["100 meters", "500 meters", "1000 meters", "2500 meters"],
        answer: 3
    },
    {
        question: "What is unique about the barreleye fish's head?",
        options: ["It is transparent", "It is covered with scales", "It is flat", "It has no eyes"],
        answer: 0
    },
    {
        question: "What is the typical size range of a sea angel?",
        options: ["1-2 cm", "5-6 cm", "10-12 cm", "20-25 cm"],
        answer: 0
    },
    {
        question: "Sea angels are found in which types of waters?",
        options: ["Tropical waters only", "Arctic and Antarctic waters", "Freshwater lakes", "Coral reefs"],
        answer: 1
    },
    {
        question: "In which ocean zone can the deep-sea dragon typically be found?",
        options: ["Sunlit zone", "Twilight zone", "Midnight zone", "Intertidal zone"],
        answer: 2
    },
    {
        question: "What is the primary characteristic of the blood belly jellyfish's appearance?",
        options: ["Transparent body", "Red coloration in the stomach area", "Bioluminescent tentacles", "Long, flowing tentacles"],
        answer: 1
    },
    {
        question: "In which ocean zone can the blood belly jellyfish typically be found?",
        options: ["Sunlit zone", "Twilight zone", "Midnight zone", "Abyssal zone"],
        answer: 2
    },
    {
        question: "How does the Dumbo octopus primarily move?",
        options: ["Jet propulsion", "Flapping its ear-like fins", "Crawling on the sea floor", "Using its tentacles to swim"],
        answer: 1
    },
    {
        question: "What color is the Dumbo octopus typically?",
        options: ["Blue", "Red", "Pinkish-white", "Green"],
        answer: 2
    },
    {
        question: "How do pelicans catch their prey?",
        options: ["Diving into the water", "Snatching from the surface while flying", "Fishing with their feet", "Using their beaks to scoop up fish"],
        answer: 3
    },
    {
        question: "What is the primary characteristic of the 'Twilight Zone'?",
        options: ["It is always night", "It is the ocean's deepest part", "It has faint sunlight", "It has no sunlight at all"],
        answer: 2
    },
    {
        question: "Which creature is commonly found in the 'Twilight Zone'?",
        options: ["Great White Shark", "Barreleye Fish", "Dumbo Octopus", "Sea Angel"],
        answer: 1
    },
    {
        question: "How do many animals in the 'Twilight Zone' produce light?",
        options: ["Bioluminescence", "Reflection", "Fluorescence", "Electricity"],
        answer: 0
    },
    {
        question: "What is the depth range of the 'Midnight Zone'?",
        options: ["200-1000 meters", "1000-4000 meters", "4000-6000 meters", "6000-8000 meters"],
        answer: 1
    },
    {
        question: "What is the primary characteristic of the 'Midnight Zone'?",
        options: ["Presence of sunlight", "No sunlight at all", "Faint sunlight", "Bright bioluminescence"],
        answer: 1
    },
    {
        question: "Which of these adaptations help creatures survive in the 'Midnight Zone'?",
        options: ["Thick fur", "Large eyes", "Bright colors", "Camouflage"],
        answer: 1
    },
    {
        question: "What is the depth range of the 'Sunlight Zone'?",
        options: ["0-200 meters", "200-1000 meters", "1000-4000 meters", "4000-6000 meters"],
        answer: 0
    },
    {
        question: "What type of environment is the 'Sunlight Zone' known for?",
        options: ["High temperatures", "Intense pressure", "Abundant food", "Bright light"],
        answer: 3
    },
    {
        question: "What is the primary source of light in the 'Sunlight Zone'?",
        options: ["Sunlight", "Bioluminescence", "Moonlight", "Artificial light"],
        answer: 0
    },
    {
        question: "What characteristic feature do basket stars possess?",
        options: ["Bioluminescence", "Highly branched arms", "Color changing ability", "Venomous spines"],
        answer: 1
    },
    {
        question: "What unique feature do giant tube worms have?",
        options: ["Bioluminescence", "Bright red plumes", "Camouflage ability", "Venomous spines"],
        answer: 1
    },
    {
        question: "How do deep-sea cucumbers defend themselves?",
        options: ["Camouflage", "Releasing toxins", "Ejecting internal organs", "Rapid swimming"],
        answer: 2
    },
    {
        question: "Which family do narwhals belong to?",
        options: ["Dolphin", "Whale", "Porpoise", "Seal"],
        answer: 1
    },
    {
        question: "What depth range defines the abyss zone?",
        options: ["1,000-2,000 meters", "2,000-3,000 meters", "4,000-6,000 meters", "6,000-8,000 meters"],
        answer: 2
    },
    {
        question: "Which zone lies directly above the abyss zone?",
        options: ["Sunlight zone", "Twilight zone", "Midnight zone", "Hadal zone"],
        answer: 2
    },
    {
        question: "What type of substrate is common in the abyss zone?",
        options: ["Rocky", "Sandy", "Muddy", "Coral reefs"],
        answer: 2
    },
    {
        question: "Which zone is directly above the ocean floor?",
        options: ["Epipelagic zone", "Mesopelagic zone", "Bathypelagic zone", "Hadopelagic zone"],
        answer: 3
    },
    {
        question: "How fast can a tuna swim?",
        options: ["10 mph", "20 mph", "30 mph", "40 mph"],
        answer: 3
    },
    {
        question: "How fast can a tuna swim?",
        options: ["10 mph", "20 mph", "30 mph", "40 mph"],
        answer: 3
    },
    {
        question: "What are the primary builders of coral reefs?",
        options: ["Sponges", "Algae", "Coral polyps", "Sea anemones"],
        answer: 2
    },

];

let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

const randomQuestions = getRandomQuestions();

function displayQuiz(index) {
    const quizContainer = document.getElementById('quiz');
    // const randomQuestions = getRandomQuestions();
    const question = randomQuestions[index];
 

    let quizContent = `
    <div class="question">
    <h4>Question ${index + 1}/10</h4><hr>
        <div class="Qtitile"><h3> ${question.question}</h3></div>
        <div class="options">
            ${question.options.map((option, i) => `
                <label> ${option}
                    <input type="radio" name="question${index}" value="${i}">
                    <span class="custom-radio"></span>
                </label>
            `).join('')}
        </div>
        
    </div>
`;
// const buttonContainer = document.getElementById('result-container');
// let buttonContent=` <button id="next">Next</button>
//                 <button id="submit">Submit</button>`;

    quizContainer.innerHTML = quizContent;
    // buttonContainer.innerHTML = buttonContent;
    // document.getElementById('submit').style.display = 'inline-block';
    document.getElementById('next').style.display = index < randomQuestions.length - 1 ? 'inline-block' : 'none';
    document.getElementById('submit').style.display = index === randomQuestions.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === randomQuestions[currentQuestionIndex].answer) {
        score++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < randomQuestions.length) {
        displayQuiz(currentQuestionIndex);
    }
}


function calculateResult() {
    const selectedOption = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === randomQuestions[currentQuestionIndex].answer) {
        score++;
    }
    

    // Show the result in the modal
    const modal = document.getElementById('resultModal');
    const resultText = document.getElementById('result');
    resultText.innerText = `You scored ${score} out of 10`;
    modal.style.display = 'block';


}

function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = 'none';
    // displayQuiz();
}


function reQuiz() {
    closeModal();
    currentQuestionIndex = 0;
    score = 0;
    displayQuiz(currentQuestionIndex);
    window.location.reload();
    // displayQuiz();
}

document.getElementById('next').addEventListener('click', nextQuestion);
document.getElementById('submit').addEventListener('click', calculateResult);
// document.getElementById('requiz').addEventListener('click', displayQuiz);
document.getElementById('modalRequiz').addEventListener('click', reQuiz);

// document.querySelector('.close').addEventListener('click', closeModal);

// window.onload = displayQuiz;
window.onload = function() {
    displayQuiz(currentQuestionIndex);
};
