import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', phone:'9347162738'}])
  const [newName, setNewName] = useState('')
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    const nameExists = persons.some((item) => item.name === newName)
    e.preventDefault()

    if (nameExists) {
      alert(`${newName} is already added to the list`)
    } else {
      const newPerson = { name: newName, phone: phone}
      setPersons([...persons, newPerson])
      setNewName('') // Clear the input field
    }

  }
  return (
    <div className="container">
      <h2>Phonebook Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Name:{' '}
          <input
            className="ms-3"
            type="text"
            placeholder="Enter a name"
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          Number:{' '}
          <input
            type="number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </div>
        <div>
          <button className="btn bg-primary mb-3" type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Phonebook List</h2>

      <div>
        {persons.map((person, index) => (
          <div key={index}>{`${person.name} ${person.phone}`}</div>
        ))}
      </div>
    </div>
  )
}

export default App
