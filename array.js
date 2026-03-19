let students = ["John", "Jane", "Doe", "Smith"];
console.log(students); // Output: ["John", "Jane", "Doe", "Smith"]
students.push("Emily");
console.log(students); // Output: ["John", "Jane", "Doe", "Smith", "Emily"]
students.pop();
console.log(students); // Output: ["John", "Jane", "Doe", "Smith"]
students.unshift("Michael");
console.log(students);

let student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    major: "Computer Science",
    courses: ["Math", "Science", "History"]
}
console.log(student); 
console.log(student.firstName); // Output: "John"
console.log(student.courses[1]); // Output: "Science"
console.log(student["firstName"]); // Output: "John"
student.age = 21;
console.log(student.age); // Output: 21

let employee = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    department: "IT",
    salary: 50000
}
console.log(employee);