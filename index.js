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

// let quizAnswers = [
//     {
//         correctsvar1: "1. brun",
//         correctsvar2: "1. svart"
//     },
//     {
//         correctsvar3: "2. frukt",
//         correctsvar4: "2. grönsaker"
//     },
//     "3. matta", "4. frukt", "5. frukt", "6. 500 gram", "7. sant", "8. sant", "9. sant", "10. sant"
// ];

let quizAnswers = [
    {
        question: "Vilken färg på päls kan hundar ha?",
        correctsvar1: "1. brun",
        correctsvar2: "1. svart"
    },
    {
        question: "Vad kan man hitta i en mataffär?",
        correctsvar3: "2. frukt",
        correctsvar4: "2. grönsaker"
    },
    {
        question: "Vad kan man hitta i en möbelbutik?",
        answer: "3. matta"
    },
    {
        question: "Vad är en avocado?",
        answer: "4. frukt"
    },
    {
        question: "Vad är en paprika?",
        answer: "5. frukt"
    },
    {
        question: "Hur mycket grönsaker behöver vi äta per dag?",
        answer: "6. 500 gram"
    },
    {
        question: "Åsnor är dumma!",
        answer: "7. sant"
    },
    {
        question: "Hundar är snälla!",
        answer: "8. sant"
    },
    {
        question: "Kött påverkar miljön negativt!",
        answer: "9. sant"
    },
    {
        question: "Väte består av 5 protoner!",
        answer: "10. falskt"
    }
];


let showResultBtn = document.querySelector("#showResult");
let results = document.querySelector("#results");



let runFiltering = () => {
    let allCheckedInputs = document.querySelectorAll("input[type='checkbox'][name='answer']:checked");
    let allCheckedRadios = document.querySelectorAll("[type='radio']:checked");
    let inputValues = [];

    allCheckedInputs.forEach((input) => {
        inputValues.push(input.value);
    });
    allCheckedRadios.forEach((input) => {
        inputValues.push(input.value);
    })

    let totalPoints = 0;

    quizAnswers.forEach((object) => {
        let p = document.createElement('p')
        p.innerText = `Question: ${object.question}`
        if (inputValues.includes(object.answer) || (inputValues.includes(object.correctsvar1)) && (inputValues.includes(object.correctsvar2)) || (inputValues.includes(object.correctsvar3)) && (inputValues.includes(object.correctsvar4))) {
            totalPoints++
            p.innerText += ` You answered right on this question!`
        } else {
            p.innerText += ` You answered wrong on this question!`
        }
        results.append(p)

    })

    let p2 = document.createElement('p')
    p2.innerText = `You got ${totalPoints}/10 points!`
    results.append(p2)

};

showResultBtn.addEventListener('click', () => {
    runFiltering();
})