// Quiz Questions Array
const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Which language is used for web development?", answer: "javascript" },
    { question: "What is the largest mammal in the world?", answer: "blue whale" }
];

// Function to Run the Quiz
function runQuiz() {
    let score = 0;
    
    for (let i = 0; i < quizQuestions.length; i++) {
        const userAnswer = prompt(quizQuestions[i].question);
        const normalizedAnswer = userAnswer.toLowerCase().trim();
        
        if (normalizedAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + quizQuestions[i].answer);
        }
    }
    
    alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// Run the Quiz
runQuiz();
