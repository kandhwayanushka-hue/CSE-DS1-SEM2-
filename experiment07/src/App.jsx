import StudentCard from './StudentCard'
import './App.css'

function App() {
  return (
    <div className="student-container">
      <StudentCard name="Alice" course="B.Tech CSE" marks={85} />
      <StudentCard name="Bob" course="B.Tech CSE" marks={92} />
      <StudentCard name="Charlie" course="B.Tech CSE" marks={78} />
    </div>
  )
}

export default App
