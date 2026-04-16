let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields properly");
        return;
    }

    employees.push({ name, id: empId, salary, department: dept });

    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    let output = "<h3>All Employees</h3>";
    
    employees.forEach(emp => {
        output += `
        <div class="card">
            <b>${emp.name}</b><br>
            ID: ${emp.id}<br>
            Salary: ₹${emp.salary}<br>
            Dept: ${emp.department}
        </div>`;
    });

    document.getElementById("output").innerHTML = output;
}

function searchEmployee() {
    let search = document.getElementById("search").value.toLowerCase();
    
    let result = employees.filter(emp => 
        emp.name.toLowerCase().includes(search)
    );

    let output = "<h3>Search Results</h3>";

    result.forEach(emp => {
        output += `
        <div class="card">
            ${emp.name} - ₹${emp.salary}
        </div>`;
    });

    document.getElementById("output").innerHTML = output;
}

function deleteAll() {
    employees = [];
    document.getElementById("output").innerHTML = "<h3>All records deleted</h3>";
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML =
        `<h3>Total Salary: ₹${total}</h3>`;
}

function averageSalary() {
    if (employees.length === 0) return;

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
}