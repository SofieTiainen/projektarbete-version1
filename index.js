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

/*All quizQuestions and correct answers*/
let quizAnswers = [
    {
        question: 'Vilken färg på päls kan hundar ha?',
        answer1a: '1. brun',
        answer1b: '1. svart'
    },
    {
        question: 'Vad kan man hitta i en mataffär?',
        answer2a: '2. frukt',
        answer2b: '2. grönsaker'
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
let results = document.querySelector('#results');
let question1Boxes = document.querySelectorAll("input[type='checkbox'][name='answer'][class='check1']");
let question2Boxes = document.querySelectorAll("input[type='checkbox'][name='answer'][class='check2']");

/*Function- choose only two checkboxes for question 1 and 2*/
let chooseOnly2 = () => {
    total = 0;
    for (i = 0; i < question1Boxes.length; i++) {
        if (question1Boxes[i].checked) {
            total += 1;
        }
        if (total > 2) {
            total = 0;
            alert('Choose only two')
            question1Boxes[i].checked = false;
        }
    }
    total = 0;
    for (i = 0; i < question2Boxes.length; i++) {
        if (question2Boxes[i].checked) {
            total += 1;
        }
        if (total > 2) {
            total = 0;
            alert('Choose only two')
            question2Boxes[i].checked = false;
        }
    }
}


let runFiltering = () => {
    let allCheckedInputs = document.querySelectorAll("input[type='checkbox'][name='answer']:checked");
    let allCheckedRadios = document.querySelectorAll("[type='radio']:checked");
    let totalPoints = 0;
    let maxPoint = 10;
    let inputValues = [];

    allCheckedInputs.forEach((input) => {
        inputValues.push(input.value);
    });
    allCheckedRadios.forEach((input) => {
        inputValues.push(input.value);
    })

    results.innerText = '';

    if (inputValues.length === 12) {
        quizAnswers.forEach((object) => {
            let p = document.createElement('p')
            p.innerText = `Question: ${object.question}`
            if (inputValues.includes(object.answer) || (inputValues.includes(object.answer1a)) && (inputValues.includes(object.answer1b)) || (inputValues.includes(object.answer2a)) && (inputValues.includes(object.answer2b))) {
                totalPoints++
                p.innerHTML += ` <strong>You answered right!</strong>`
            } else {
                p.innerHTML += ` <strong>You answered wrong!</strong>`
            }
            results.append(p)
        })

        let p2 = document.createElement('p')
        p2.innerText = `You got ${totalPoints}/10 points!`
        if (totalPoints < maxPoint * 0.5) {
            p2.style.color = 'red';
            p2.innerHTML += ` <strong>You failed the test</strong>`
        } else if (totalPoints > maxPoint * 0.75) {
            p2.style.color = 'green';
            p2.innerHTML += ` <strong>You passed the test with special distinction</strong>`
        } else {
            p2.style.color = 'orange';
            p2.innerHTML += ` <strong>You passed the test</strong>`
        }
        results.append(p2)

        let refreshQuizBtn = document.createElement('button')
        refreshQuizBtn.id = 'newQuizBtn'
        refreshQuizBtn.innerText = `Do quiz again`;
        results.append(refreshQuizBtn)
        refreshQuizBtn.addEventListener('click', () => {
            location.reload();
        })

    } else {
        alert('You need to answer all questions')
    }
};


switchModeBtn.addEventListener('click', () => {
    switchMode();
})

question1Boxes.forEach((box) => {
    box.addEventListener('change', chooseOnly2);
})

question2Boxes.forEach((box) => {
    box.addEventListener('change', chooseOnly2);
})
showResultBtn.addEventListener('click', () => {
    runFiltering();
})