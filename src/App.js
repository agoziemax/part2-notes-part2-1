import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [phone, setPhone] = useState('')
  const [nameSearch, setNameSearch] = useState('')

  const handleSearch = (e) => {
    const nameExists = persons.some((item) => item.name === nameSearch)

    
    setNameSearch(e.target.value)
  }
  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    const nameExists = persons.some((item) => item.name === newName)
    e.preventDefault()

    if (nameExists) {
      alert(`${newName} is already added to the list`)
    } else {
      const newPerson = { name: newName, phone: phone }
      setPersons([...persons, newPerson])
      setNewName('') // Clear the input field
    }
  }
  return (
    <div className="container">
      <h2>Phonebook Entry</h2>
      <div className="mb-5 mt-3">
        filter names:{' '}
        <input
          type="text"
          placeholder="search for names"
          value={nameSearch}
          onChange={handleSearch}
        />
      </div>

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
