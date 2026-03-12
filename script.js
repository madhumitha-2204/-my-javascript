//Global array
let students = [];

// Function to add student
function addStudent(name, marks) {

    students.push({
        studentName: name,
        studentMarks: marks
    });

}

// Students add
addStudent("Madhumitha", [80,75,90]);
addStudent("Arun", [60,55,70]);
addStudent("Priya", [40,45,50]);

// Function to check result
function checkResult(){

let resultText = "";

for(let i=0;i<students.length;i++){

let student = students[i];
let marks = student.studentMarks;

let total = 0;

for(let j=0;j<marks.length;j++){
total += marks[j];
}

let average = total / marks.length;

let result;

if(average >= 50){
result = "PASS";
}
else{
result = "FAIL";
}

resultText += "Name: " + student.studentName + "<br>";
resultText += "Average: " + average + "<br>";
resultText += "Result: " + result + "<br>";
resultText += "-------------------<br>";

}

// Show in live page
document.getElementById("output").innerHTML = resultText;

}