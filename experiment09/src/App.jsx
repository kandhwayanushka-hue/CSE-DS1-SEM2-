import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log("Fetch error", err))
  }, [])

  function validate() {
    const err = {}
    if (!name) err.name = "Name is required"
    if (!email) err.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) err.email = "Invalid email format"
    if (!password || password.length < 6) err.password = "Password must be at least 6 characters"
    return err
  }

  function handleSubmit(e) {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length === 0) {
      setSubmitted(true)
      setName(""); setEmail(""); setPassword("")
    }
  }

  return (
    <div className="app">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        {errors.name && <p className="error">{errors.name}</p>}
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
      {submitted && <p className="success">Registration successful!</p>}

      <h2>Users from API</h2>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
      </ul>
    </div>
  )
}

export default App
