// const subjects=[
//     MATHEMATICS=100,
//     ENGLISH_LANGUAGE= 100,
//     AGRICULTURE=100,
//     SOCIAL_STUDIES=100,
// ]
// function thescore(score){
//     if(score < 0 || score >400)
//         return "INVALID SCORE";
// } elseif(score >= 90){
//     return "A";
// }
const studentNames=document.getElementById("studentname")
const adminNo=document.getElementById("adminNo")
const names=document.getElementById("names")
const admin=document.getElementById("admin")
const score=document.getElementById('score')
const comment=document.getElementById("comm")

const math=document.getElementById("math");
const eng=document.getElementById("english")
const agric=document.getElementById("agric")
const ss=document.getElementById("social")

function checkResult(){
    names.innerHTML="DEAR -" + studentNames.value;
    admin.innerHTML="YOUR REG NUM -" + adminNo.value;
    const finalScore=Number(math.value) + Number(english.value) + Number(agric.value) + Number(social.value)
    score.innerHTML="YOUR TOTAL SCORE ="+finalScore;

    let percentage=finalScore /4
    console.log("click")
    const total=document.getElementById("comm").innerHTML="Dear" +" "+ studentNames.value + " " + "your total score is " +" " +finalScore + "/400 ,while your percentage obtained is "+ percentage+"%.";
    // if(percentage >=200 && percentage <=400){
    // checkResult.innerHTML= "Dear" +" "+ studentNames.value + " " + "your total score is " +" " +finalScore + "/400 ,while your percentage obtained is "+ percentage+"%."+"Excellent Result"
    //     console.log("show all these")
    // }else if(percentage<=100 && percentage >=199)
    // total.innerHTML= "Dear" +" "+ studentNames.value + " " + "your total score is " +" " +finalScore + "/400 ,while your percentage obtained is "+ percentage+"%."+"Average performance"

}



// const studentName = document.getElementById('studentname');
// const adminNo = documenth.getElementById('adminNo');
// const dname = document.getElementById('dname');
// const dId = document.getElementById('dId');
// const score = document.getElementById('score');

// const math = document.getElementById("math");
// const english = document.getElementById("english");
// const agric = document.getElementById("agric");
// const social = document.getElementById("ss");

// function checkResult() {
//     dname.innerHTML = "Hello " + studentName.value ;
//     dId.innerHTML = "Your id is " + adminNo.value;
//     const finalScore = Number(math.value) + Number(english.value) + Number(agric.value) + Number(social.value);
//     score.innerHTML = "your score is " + finalScore;
// }