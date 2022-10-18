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


let quizAnswers = ["1. brun", "1. svart", "1. vit", "2. frukt", "2. grönsaker", "2. mjölk", "3. sant", "4. sant", "5. sant"];


let allQuestions = document.querySelector("#allQuestions"); //ej använt
let showResultBtn = document.querySelector("#showResult");
let results = document.querySelector("#results");
let checkboxes = document.querySelectorAll("input[name='answer']"); //ej använt

function oneCheckedBox(obj) {
    let boxes = document.getElementsByClassName("check")
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].checked = false;
    }
    obj.checked = true;
}


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
        results.innerText = "";
        if (inputValues.includes(object)) {
            totalPoints++
            p.innerText = `You got ${totalPoints}/5 points!`
        } else {
            p.innerText = `You got ${totalPoints}/5 points!`
        }
        results.append(p)

    })

};

showResultBtn.addEventListener('click', () => {
    runFiltering();
})