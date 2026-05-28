import './App.css'

function Student({ name, course, marks }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <h3>Course: {course}</h3>
      <h4>Marks: {marks}</h4>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <h1>Student Details</h1>
      <Student name="Alice" course="B.Tech CSE" marks={85} />
      <Student name="Bob" course="B.Tech CSE" marks={92} />
      <Student name="Charlie" course="B.Tech CSE" marks={78} />
    </div>
  )
}

export default App
