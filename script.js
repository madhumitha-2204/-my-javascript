function CheckResult(){
let StudentName="Madhumitha";
let mark=96;
let isPresent=true;

let result;
if (mark>=50){
    result="Pass";
}else{
    result="Fail";
}
let grade;

switch(true){
    case(mark>=90):
    grade="A+";
    break;

    case(mark>=75):
    grade="A";
    break;

    case(mark>=60):
    grade="B";
    break;

    case(mark>=50):
    grade="C";
    break;

    default:
        grade="Fail";
}
document.getElementById("output").innerHTML=
"Name:"+ StudentName +
"<br>Mark:"+ mark +
"<br>Result:"+ result +
"<br>Grade:"+ grade ;
}