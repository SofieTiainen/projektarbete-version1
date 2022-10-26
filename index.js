/*Function- Switch between dark- and light mode*/
let switchModeBtn = document.querySelector('#swithModeBtn');
let switchMode = () => {
    if (switchModeBtn.innerText === 'Switch to darkmode') {
        (document.body.style.backgroundColor = 'darkmagenta') && (document.body.style.color = 'floralwhite');
        switchModeBtn.innerText = 'Switch to lightmode';
    } else {
        (document.body.style.backgroundColor = 'floralwhite') && (document.body.style.color = 'darkmagenta');
        switchModeBtn.innerText = 'Switch to darkmode';
    }
}

/*All quizQuestions and all correct answers + wrong answers for question 1 and 2*/
let quizData = [
    {
        question: 'Vilken färg på päls kan hundar ha?',
        answer: ['1. brun', '1. svart', '1. rosa', '1. grön']
    },
    {
        question: 'Vad kan man hitta i en mataffär?',
        answer: ['2. frukt', '2. grönsaker', '2. stenar', '2. möbler']
    },
    {
        question: 'Vad kan man hitta i en möbelbutik?',
        answer: '3. matta'
    },
    {
        question: 'Vad är en avocado?',
        answer: '4. frukt'
    },
    {
        question: 'Vad är en paprika?',
        answer: '5. frukt'
    },
    {
        question: 'Hur mycket grönsaker behöver vi äta per dag?',
        answer: '6. 500 gram'
    },
    {
        question: 'Åsnor är dumma!',
        answer: '7. sant'
    },
    {
        question: 'Hundar är snälla!',
        answer: '8. sant'
    },
    {
        question: 'Kött påverkar miljön negativt!',
        answer: '9. sant'
    },
    {
        question: 'Väte består av 5 protoner!',
        answer: '10. falskt'
    }
];


let showResultBtn = document.querySelector('#showResult');
let result = document.querySelector('#result');
let results = document.querySelectorAll('#resultForEachQ');

let getResult = () => {
    let allCheckboxesInput = document.querySelectorAll("input[type='checkbox'][name='answer']:checked");
    let allRadiosInput = document.querySelectorAll("[type='radio']:checked");
    let totalPoints = 0;
    let maxPoint = 10;
    let inputValues = [];


    allCheckboxesInput.forEach((input) => {
        inputValues.push(input.value);
    });
    allRadiosInput.forEach((input) => {
        inputValues.push(input.value);
    })


    result.innerText = '';

    /* Info för nedan i if-statement
    (object.answer[0]) = brun och frukt (rätt)
    (object.answer[1]) = svart och grönsaker (rätt)
    (object.answer[1, 2]) = rosa och stenar (fel)
    (object.answer[1, 3]) = grön och möbler (fel)*/

    quizData.forEach((object) => {
        let p = document.createElement('p')
        p.innerText = `Question: ${object.question}`
        if ((inputValues.includes(object.answer)) || (inputValues.includes(object.answer[0])) && (inputValues.includes(object.answer[1])) && (!inputValues.includes(object.answer[1, 2])) && (!inputValues.includes(object.answer[1, 3]))) {
            totalPoints++
            p.innerHTML += ` <strong>You answered<span style= "color: green"> right!</span</strong>`
        } else {
            p.innerHTML += ` <strong>You answered<span style= "color: red"> wrong!</span</strong>`
        }
        result.append(p)
    })



    let p2 = document.createElement('p')
    p2.innerText = `You got ${totalPoints}/10 points!`
    if (totalPoints < maxPoint * 0.5) {
        p2.style.color = 'red';
        p2.innerHTML += ` <strong>You failed the test</strong>`
    } else if (totalPoints > maxPoint * 0.75) {
        p2.style.color = 'green';
        p2.innerHTML += ` <strong>You passed the test with extraordinary results</strong>`
    } else {
        p2.style.color = 'orange';
        p2.innerHTML += ` <strong>You passed the test</strong>`
    }
    result.append(p2)

    let refreshQuizBtn = document.createElement('button')
    refreshQuizBtn.id = 'refreshQuizBtn'
    refreshQuizBtn.innerText = `Do quiz again`;
    result.append(refreshQuizBtn)
    refreshQuizBtn.addEventListener('click', () => {
        location.reload();
    })

}

switchModeBtn.addEventListener('click', () => {
    switchMode();
})

showResultBtn.addEventListener('click', () => {
    getResult();
})