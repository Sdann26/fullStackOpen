import React, { useState } from 'react'

const App = () => {
  // States
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Marinela' }
  ]) 
  const [newName, setNewName] = useState('')

  // handleEvent and onSubmit
  const handleAddName = (e) => {
    setNewName(e.target.value)
  }

  const existingUserAlert = (name) => {
    const existingNames = persons.find(person => person.name === name.trim())
    if (existingNames === undefined){
      return false
    }
    alert(`${name.trim()} is already added to phonebook`)
    return true
  } 

  const sendForm = (e) => {
    e.preventDefault()
    if (existingUserAlert(newName)){
      return
    }
    setPersons(persons.concat({name: newName.trim()}))
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