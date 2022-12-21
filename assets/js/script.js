/*jshint esversion: 6 */
/*jshint -W033 */

// Array of objects with all the questions, options and correct answer
const fullQuestions = [
    {
        "question" : "Tea originated in which country?",
        "options": ["India","Sri Lanka","United Kingdom","China"],
        "correct": "China"
        },
    {
        "question" : "Russia is the largest country in the world measured by land mass. What's the next largest?",
        "options": ["China","United States","Brazil", "Canada"],
        "correct": "Canada"
    },
    {
        "question" : "Croatia and Slovenia border which sea?",
        "options": ["Balearic Sea","Java Sea", "Laptev Sea", "Adriatic Sea"],
        "correct": "Adriatic Sea"
    },
    {
        "question" : "In Greek mythology, what was the name of the three-headed dog that guarded the gate to the underworld?",
        "options": ["Ipotane", "Griffin","Ophiotaurus","Cerberus"],
        "correct": "Cerberus"
    },
    {
        "question" : "Where's the strongest human muscle located?",
        "options": ["The Shoulder", "The thigh","The buttocks","The jaw"],
        "correct": "The jaw"
    },
    {
        "question" : "Titan is a moon of which planet?",
        "options": ["Neptune","Uranus","Mercury","Saturn"],
        "correct": "Saturn"
    },
    {
        "question" : "What's the world's most expensive spice by weight?",
        "options": ["Mahlab","Vanilla bean","Cardamom","Saffron"],
        "correct": "Saffron"
    },
    {
        "question" : "In what year did the French Revolution begin?",
        "options": ["1791","1785","1764","1789"],
        "correct": "1789"
    },
    {
        "question" : "What color dresses do Chinese women traditionally wear on their wedding day?",
        "options": ["White","Purple","Yellow","Red"],
        "correct": "Red"
    },
    {
        "question" : "Physicist Albert Einstein was born in which country?",
        "options": ["Belgium","Austria","Finland","Germany"],
        "correct": "Germany"
    },
    {
        "question" : "Emerald is the traditional birthstone associated with which month of the year?",
        "options": ["March","August","October","May"],
        "correct": "May"
    },
    {
        "question" : "Kampala is the capital of which East African country?",
        "options": ["Zambia","Rwanda","Ethiopia","Uganda"],
        "correct": "Uganda"
    },
    {
        "question" : "Which ex-Beatle was born Richard Starkey in July 1940?",
        "options": ["Paul McCartney","John Lennon","George Harrison","Ringo Starr"],
        "correct": "Ringo Starr"
    },
    {
        "question" : "Where was playwright Oscar Wilde born in October 1854?",
        "options": ["Galway, Ireland","Cork, Ireland","Limerick, Ireland","Dublin, Ireland"],
        "correct": "Dublin, Ireland"
    },
    {
        "question" : "On which part of the body would one wear a cravat?",
        "options": ["Wrist","Head","Ankle","Neck"],
        "correct": "Neck"
    }
    ];

// Variables to set the initial state of the game
let currentQuestionIndex = -1;
let questionNumber = 0;
 
// Wait for the DOM to finish loading before running the game
document.addEventListener('DOMContentLoaded', pageLoaded);
 
/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function pageLoaded() {
 
    document.getElementById('question-number').innerText = questionNumber;
 
    shuffle(fullQuestions);
 
    nextQuestion();
   
    // Add event listeners for user click and get user answer
    getUserAnswer();
   
}
 
/**
 *
 * Gets and array and shuffle its elements. Function from tutorial at https://javascript.info/task/shuffle
 */
function shuffle(array) {
 
    array.sort(() => Math.random() - 0.5);
 
}
 
/**
 * Get user answer
 */
function getUserAnswer() {
   
    let answers = document.getElementsByClassName('answer');
    for (let answer of answers) {
        answer.addEventListener('click', checkAnswer);
    }
 
}
 
/**
 * Check the answer and respond to the user if it is or not
 */
function checkAnswer(event) {
  	const userAnswer = event.target.innerText;
       
    if (userAnswer == fullQuestions[currentQuestionIndex].correct){
        Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'It is right.',
            timer: 3000,
          })
        incrementScore();
        nextQuestion();
        }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Sorry.',
            text: `The correct answer is ${fullQuestions[currentQuestionIndex].correct}`,
            timer: 3000,
          })
        incrementWrongAnswer();
        nextQuestion();
    }
 
}
 
/**
 * Gets the current score from the DOM and increments it by 1. Increment question number by 1.
 */
function incrementScore() {
 
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
 
    document.getElementById('question-number').innerText = ++questionNumber;
 
}
 
/**
 * Gets the current incorrect answers from the DOM and increments it by 1.  Increment question number by 1.
 */
function incrementWrongAnswer() {
 
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
 
    document.getElementById('question-number').innerText = ++questionNumber;
 
}
 
// Exclude the question from fullQuestion and show another random question
function nextQuestion(){
 
    ++currentQuestionIndex;
    if (currentQuestionIndex < fullQuestions.length){
 
        let fullQuestion = fullQuestions[currentQuestionIndex];
        let question = document.getElementById('question');
        question.textContent = fullQuestion.question;
       
        // shuffle options
        shuffle(fullQuestion.options);
 
        // display question and options
        let answer1 = document.getElementById('answer1');
        answer1.textContent = fullQuestion.options[0];
        let answer2 = document.getElementById('answer2');
        answer2.textContent = fullQuestion.options[1];
        let answer3 = document.getElementById('answer3');
        answer3.textContent = fullQuestion.options[2];
        let answer4 = document.getElementById('answer4');
        answer4.textContent = fullQuestion.options[3];
 
    } else {
       
        endGame();
   
    }  
 
}
 
/**
 * Displayed when the game ends. Shows the final score.
 */
function endGame(){
   
    let popup = document.getElementsByClassName('popup')[0];
    popup.style.display = 'block';
 
    let score = parseInt(document.getElementById('score').innerText);
    document.getElementById('score2').innerText = score;
 
    // Event listener to refresh the page on click button 'Play again'
       
    const button = document.getElementById('play-again');
    button.addEventListener('click', playAgain);
 
}
 
/**
 * Refresh the page to restart the game
 */
function playAgain() {
 
    window.location.reload();
 
}