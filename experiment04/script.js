const numSubjects = parseInt(prompt("Enter number of subjects:"));
let total = 0;
for (let i = 1; i <= numSubjects; i++) {
  let marks = parseFloat(prompt(`Enter marks for subject ${i}:`));
  total += marks;
}
const average = total / numSubjects;
let grade = "";
if (average >= 90) grade = "A+";
else if (average >= 80) grade = "A";
else if (average >= 70) grade = "B+";
else if (average >= 60) grade = "B";
else if (average >= 50) grade = "C";
else grade = "F";
const result = average >= 50 ? "Pass" : "Fail";
document.getElementById("output").innerHTML = `
  <p><strong>Total Marks:</strong> ${total}</p>
  <p><strong>Average:</strong> ${average.toFixed(2)}</p>
  <p><strong>Grade:</strong> ${grade}</p>
  <p><strong>Result:</strong> ${result}</p>
`;
