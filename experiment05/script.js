const employees = [];
function addEmployee() {
  const name = document.getElementById("name").value;
  const salary = parseFloat(document.getElementById("salary").value);
  const dept = document.getElementById("dept").value;
  if (name && salary && dept) {
    employees.push({ name, salary, dept });
    document.getElementById("output").innerHTML = `<p style="color:green;">Employee added successfully!</p>`;
  }
}
function displayAll() {
  let html = "<table><tr><th>Name</th><th>Salary</th><th>Department</th></tr>";
  employees.forEach(e => html += `<tr><td>${e.name}</td><td>₹${e.salary}</td><td>${e.dept}</td></tr>`);
  html += "</table>";
  document.getElementById("output").innerHTML = html;
}
function filterHighSalary() {
  const filtered = employees.filter(e => e.salary > 50000);
  let html = "<h4>Employees with salary > ₹50,000</h4>";
  if (filtered.length === 0) html += "<p>None</p>";
  else {
    html += "<table><tr><th>Name</th><th>Salary</th><th>Department</th></tr>";
    filtered.forEach(e => html += `<tr><td>${e.name}</td><td>₹${e.salary}</td><td>${e.dept}</td></tr>`);
    html += "</table>";
  }
  document.getElementById("output").innerHTML = html;
}
function showStats() {
  const total = employees.reduce((acc, e) => acc + e.salary, 0);
  const avg = employees.length ? total / employees.length : 0;
  document.getElementById("output").innerHTML = `
    <p><strong>Total Salary Payout:</strong> ₹${total}</p>
    <p><strong>Average Salary:</strong> ₹${avg.toFixed(2)}</p>
  `;
}
function countDept() {
  const dept = prompt("Enter department name:");
  const count = employees.filter(e => e.dept.toLowerCase() === dept.toLowerCase()).length;
  document.getElementById("output").innerHTML = `<p>Employees in ${dept}: ${count}</p>`;
}
