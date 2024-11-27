const quizdata=[
{
    question:"what is the capital of United state of America?",
    A: "Sydney",
    B: "Washiton",
    C: "Denver",
    D:"Oklahoma",
    correct:"C"
},
{
    question:"when did United state of America got her Independence?",
    A:"July 4 1779",
    B:"April 17 1567",
    C:"July 14 1774",
    D:"January 23 1995",
    coreect:"C"
},
{
    question:"when did Nigeria got her independence?",
    A:"October 9 1960",
    B:"August 12 1998",
    C:"October 12 1960",
    D:"february 13 1976",
    corect:"A"
},
{
    question:"what's the full meaning of HTML?",
    A:"Highest text makeup language",
    B:"High text markup language",
    C:"Higher text markup language",
    D:"Hyper text markup langauge",
    correct:"D"
},
{
    question:"what year was JavaScript launched?",
    A:"1996",
    B:"1995",
    C:"1994",
    D:"None of the above",
    correct:"B"
}
];
let currentQuiz=0
let score=0
const questionEl=document.getElementById('question')
const answerEl=document.querySelectorAll('.answer')
const answerA=document.getElementById("optionA")
const answerB=document.getElementById("optionB")
const answerC=document.getElementById("optionC")
const answerD=document.getElementById("optionD")
const next=document.getElementById("next")
const main=document.querySelector(" .main")
function loadQuiz(){
    deselectAnswer()

    const currentQuizQuestion=quizdata[currentQuiz]
    // console.log(currentQuizQuestion)
    questionEl.innerText=currentQuizQuestion.question
    // console.log(questionEl.innerText)

    answerA.innerText=currentQuizQuestion.A
    answerB.innerText=currentQuizQuestion.B
    answerC.innerText=currentQuizQuestion.C
    answerD.innerText=currentQuizQuestion.D
}
function deselectAnswer(){
    answerEl.forEach(answerEl=>{
        // console.log(answerEl)
        // console.log(answerEl.checked)
        answerEl.checked=false
    })
}
function getSelected(){
    let answer
    answerEl.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}
function resetQuiz(){
    loadQuiz()
    currentQuiz=0
    score=0
    next.style.display='block'
}
next.addEventListener("click", ()=>{
    const answer=getSelected()
    if(answer){
        if(answer ===
           quizdata[currentQuiz].correct){
            score++
           }
           currentQuiz++
           if(currentQuiz < quizdata.length){
            loadQuiz()
           }else{
            quizdata.InnerHTML=`<h2>You scored $ {score} of $ {quizdata.length}question<h2/>
            <buttton onclick='resetQuiz()'>Restart</buttton>`
        
           }

    }
})
loadQuiz()
