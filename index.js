/*Switch between dark- and light mode*/
let switchColorBtn = document.querySelector("#changeBgColor");
switchColorBtn.addEventListener("click", () => {
    if (switchColorBtn.innerText === "Switch to darkmode") {
        (document.body.style.backgroundColor = "black") && (document.body.style.color = "white");
        switchColorBtn.innerText = "Switch to lightmode";
    } else {
        (document.body.style.backgroundColor = "white") && (document.body.style.color = "black");
        switchColorBtn.innerText = "Switch to darkmode";
    }
});


let myQuizQuestions = [
    {
        question: "Kossor har 4 ben",
        correctAnswer: "1. sant"
    },
    {
        question: "Myror har 4 ben",
        correctAnswer: "2. falskt"
    },
    {
        question: "Pingviner har 2 ben",
        correctAnswer: "3. sant"
    }
];


let allQuestions = document.querySelector("#allQuestions");
let showResultBtn = document.querySelector("#showResult");
let results = document.querySelector("#results");
let checkboxes = document.querySelectorAll("input[name='answer']");


let runFiltering = () => {
    let allCheckedInputs = document.querySelectorAll("input[type='checkbox'][name='answer']:checked");
    let inputValues = [];
    allCheckedInputs.forEach((input) => {
        inputValues.push(input.value);
    });

    let allCorrectAnswers = [];
    let totalPoints = 0;
    myQuizQuestions.forEach((object) => {
        allCorrectAnswers.push(object.correctAnswer);
        let p = document.createElement('p')
        results.innerText = "";
        if (inputValues.includes(object.correctAnswer)) {
            totalPoints++
            p.innerText = `You got ${totalPoints}/3 points!`
        } else {
            p.innerText = `You got ${totalPoints}/3 points!`
        }
        results.append(p)

    })
};

showResultBtn.addEventListener('click', () => {
    runFiltering();
})