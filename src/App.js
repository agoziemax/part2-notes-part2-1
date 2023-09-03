import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    const nameExists = persons.some((item) => item.name === newName)
    e.preventDefault()
    if (nameExists) {
       alert(`${newName} is already added to the list`)
    } else  {

      const newPerson = { name: newName }
      setPersons([...persons, newPerson])
      setNewName('') // Clear the input field
    }
  }
  return (
    <div className="container">
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input
            type="text"
            placeholder="Enter a name"
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="btn bg-primary" type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        {persons.map((person, index) => (
          <div key={index}>{person.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App
