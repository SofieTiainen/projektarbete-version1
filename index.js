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


// let quizAnswers = ["1. brun", "1. svart", "1. vit", "2. frukt", "2. grönsaker", "2. mjölk", "3. matta", "4. frukt", "5. frukt", "6. 500 gram", "7. sant", "8. sant", "9. sant", "10. sant"];

let quizAnswers = [
    {
        correctsvar1: "1. brun",
        correctsvar2: "1. svart",
        correctsvar3: "1. vit"
    },
    {
        correctsvar4: "2. frukt",
        correctsvar5: "2. grönsaker",
        correctsvar6: "2. mjölk"
    }
];

console.log(quizAnswers)

// let newArr = [];

// quizAnswers.forEach((obj) => {
//     newArr.push(obj);
//     console.log(newArr)
// })
//fungerade


/*  {
    namn: "Johan Johansson",
    utbildning: "Frontend",
    stad: "Stockholm",
    år: 2
  },*/


let allQuestions = document.querySelector("#allQuestions"); //ej använt
let showResultBtn = document.querySelector("#showResult");
let results = document.querySelector("#results");
let longResults = document.querySelector("#longresults");
// let checkboxes = document.querySelectorAll("input[name='answer'][name='answer']");
// let checkboxes = document.querySelectorAll("div.question1, div.question2");


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

    // quizAnswers.forEach((object) => {
    //     console.log(object)
    // })
    //vå får ut de korrekta svaren var för sig
    let totalPoints = 0;
    quizAnswers.forEach((object) => {
        console.log(object)
        let p = document.createElement('p')
        results.innerText = "";
        if (inputValues.includes(object)) {
            totalPoints++
            p.innerText = `You got ${totalPoints}/10 points!`
        } else {
            p.innerText = `You got ${totalPoints}/10 points!`
        }
        results.append(p)
        // longResults.append(p2)

    })

    // includes object || object.object?? då kan vi nog ha object i arrayen för fråga 1 och 2
    // testa lägga in object i min array sen console.logga ut just en del, alltså
    //svarsalternativen för fråga 1.

};

showResultBtn.addEventListener('click', () => {
    runFiltering();
})