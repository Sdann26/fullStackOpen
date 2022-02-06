import React, { useState } from 'react'

const App = () => {
  // States
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // handleEvent and onSubmit
  const handleAddName = (e) => {
    setNewName(e.target.value)
  }
  console.log(newName);

  const sendForm = (e) => {
    e.preventDefault()
    setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={sendForm}>
        <div>
          name: <input onChange={handleAddName} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, id)=>{
        return <p key={id}>{person.name}</p>
      })}
    </div>
  )
}

export default App