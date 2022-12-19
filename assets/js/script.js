// Wait for the DOM to finish loading before running the game

document.addEventListener('DOMContentLoaded', pageLoaded);

let currentQuestionIndex = -1;

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function pageLoaded() {


    shuffle(fullQuestions);

    nextQuestion();
    
    // Add event listeners for user click and get user answer
    addClickEvent();
    
}

// function from tutorial at https://javascript.info/task/shuffle
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

/**
 * Get user answer
 */
function addClickEvent() {
    
    let answers = document.getElementsByClassName("answer");
    for (let answer of answers) {
        answer.addEventListener("click", function() {
            checkAnswer(this.id);
        });
    }
}

/**
 * Check the answer and respond to the user if it is or not
 */
function checkAnswer(userAnswer) {
        
    if (userAnswer.charAt(6) == fullQuestions[0].correct + 1){
        alert("It is right. Congratulations!");
        incrementScore();
        nextQuestion();
        }
    else {
        alert(`Sorry. The correct answer is ${fullQuestions[0].options[fullQuestions[0].correct]}`);
        incrementWrongAnswer();
        nextQuestion();
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

// Exclude the question from fullQuestion and show another random question
function nextQuestion(){

    ++currentQuestionIndex;
    if (currentQuestionIndex < fullQuestions.length){
        let fullQuestion = fullQuestions[currentQuestionIndex];
        let question = document.getElementById('question');
        question.textContent = fullQuestion.question;
        let answer1 = document.getElementById('answer1');
        answer1.textContent = fullQuestion.options[0];
        let answer2 = document.getElementById('answer2');
        answer2.textContent = fullQuestion.options[1];
        let answer3 = document.getElementById('answer3');
        answer3.textContent = fullQuestion.options[2];
        let answer4 = document.getElementById('answer4');
        answer4.textContent = fullQuestion.options[3];
    } else {
        alert("End Game!")
    }
}

// Create an array of objects with all the questions, options, correct answer and image
let fullQuestions = [
{
    "question" : "Tea originated in which country?",
    "options": ["India","Sri Lanka","United Kingdom","China"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/XKazC-m86.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Russia is the largest country in the world measured by land mass. What's the next largest?",
    "options": ["China","United States","Brazil", "Canada"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/gLTnbXy3I.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Croatia and Slovenia border which sea?",
    "options": ["Balearic Sea","Java Sea", "Laptev Sea", "Adriatic Sea"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/U30xdjJ6a.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "In Greek mythology, what was the name of the three-headed dog that guarded the gate to the underworld?",
    "options": ["Ipotane", "Griffin","Ophiotaurus","Cerberus"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/C3clEUQBO.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Where's the strongest human muscle located?",
    "options": ["The Shoulder", "The thigh","The buttocks","The jaw"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/eZWGBjEIG.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Titan is a moon of which planet?",
    "options": ["Neptune","Uranus","Mercury","Saturn"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/wRURafEkp.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "What's the world's most expensive spice by weight?",
    "options": ["Mahlab","Vanilla bean","Cardamom","Saffron"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/4ZCQJWi_e.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "In what year did the French Revolution begin?",
    "options": ["1791","1785","1764","1789"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/r539lpUq_.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "What color dresses do Chinese women traditionally wear on their wedding day?",
    "options": ["White","Purple","Yellow","Red"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/flujU1a_B.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Physicist Albert Einstein was born in which country?",
    "options": ["Belgium","Austria","Finland","Germany"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/z6Cn0GSLV.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Emerald is the traditional birthstone associated with which month of the year?",
    "options": ["March","August","October","May"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/H4JkX2Ufi.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Kampala is the capital of which East African country?",
    "options": ["Zambia","Rwanda","Ethiopia","Uganda"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/5OWNf_ent.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Which ex-Beatle was born Richard Starkey in July 1940?",
    "options": ["Paul McCartney","John Lennon","George Harrison","Ringo Starr"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/Rt67oi4Q7.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "Where was playwright Oscar Wilde born in October 1854?",
    "options": ["Galway, Ireland","Cork, Ireland","Limerick, Ireland","Dublin, Ireland"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/mIBsv8iva.png?downsize=625%3A*&output-format=auto&output-quality=auto"
},
{
    "question" : "On which part of the body would one wear a cravat?",
    "options": ["Wrist","Head","Ankle","Neck"],
    "correct": 3,
    "image": "https://img.buzzfeed.com/store-an-image-prod-us-east-1/Aj3kVGgi6.png?downsize=625%3A*&output-format=auto&output-quality=auto"
}
];