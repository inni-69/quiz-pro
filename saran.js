const questions = [
{
            question : "Which one of the following is an application of Stack Data Structure? ",
            answers: [
                { text: "Managing function calls", correct: false},
                { text: "Deleting function calls", correct: false},
                { text: "Arithmetic expression evaluation", correct: false},
                { text: "All of the above", correct: true},
            ]
                },
{

    question : " A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies?",
    answers: [
        { text: "An array of 50 numbers", correct: true},
        { text: "An array of 100 numbers", correct: false},
        { text: "An array of 500 numbers", correct: false},
        { text: "A dynamically allocated array of 550 numbers", correct: false},
    ]


},
{
question : " Suppose the numbers 7, 5, 1, 8, 3, 6, 0, 9, 4, 2 are inserted in that order into an initially empty binary search tree. The binary search tree uses the usual ordering on natural numbers. What is the in-order traversal sequence of the resultant tree? ",
answers: [
    { text: "7 5 1 0 3 2 4 6 8 9", correct: false},
    { text: "0 1 2 3 4 5 6 7 8 9", correct: true},
    { text: "0 2 4 3 1 6 5 9 8 7", correct: false},
    { text: "9 8 6 4 2 3 0 1 5 7", correct: false},
]


},
{

    question : " Which of the following is an advantage of adjacency list representation over adjacency matrix representation of a graph? ",
    answers: [
        { text: "In adjacency list representation, space is saved for sparse graphs.", correct: false},
        { text: "	DFS and BSF can be done in O(V + E) time for adjacency list representation. These operations take O(V^2) time in adjacency matrix representation. Here is V and E are number of vertices and edges respectively", correct: false},
        { text: "Adding a vertex in adjacency list representation is easier than adjacency matrix representation.", correct: false},
        { text: "All of the above", correct: true},
    ]
},
{

    question : "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity? ",
    answers: [
        { text: "Insertion Sort", correct: false},
        { text: "Quick Sort", correct: false},
        { text: "Merge Sort", correct: true},
    ]
},




];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz() {
    currentQuestionIndex=0;
    score=10;
    nextButton.innerHTML = "Next";
    showQuestion();                                            
}
   function showQuestion(){
resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
   
currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct)
    {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
        
        
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore()
{
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>
{
if(currentQuestionIndex < questions.length)
{
    handleNextButton();
}
else{
    startQuiz();
}
});
startQuiz();



    
