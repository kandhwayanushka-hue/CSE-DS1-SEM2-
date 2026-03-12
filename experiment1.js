function calculateResult() {
    let n = document.getElementById("subject").value;
    let total =0;
    for(let i=1;i<=n;i++){
        let marks = parseFloat("Enter marks for subjects " + i + ": ");
        total += marks;
    }
    let average = total / n;
    let grade;
    let result;
    if(average >= 90){
        grade = "A";
    } else if(average >= 80){
        grade = "B";
    }   else if(average >= 70){
        grade = "C";
    } else if(average >= 60){
        grade = "D";
    }
        else {  
        grade = "F";
    }
    if(average >= 60){
        result = "Pass";
    } else {
        result = "Fail";
    }
    document.getElementById("result").innerHTML = "Total: " + total + "<br>Average: " + average.toFixed(2) + "<br>Grade: " + grade + "<br>Result: " + result;
}