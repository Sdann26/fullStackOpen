import React, { useState } from 'react'

const App = () => {
  // States
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  // Functions 
  const existingUserAlert = (name) => {
    const existingNames = persons.find(person => person.name === name.trim())
    if (existingNames === undefined){
      return false
    }
    alert(`${name.trim()} is already added to phonebook`)
    return true
  } 

  // handleEvent and onSubmit
  const handleAddName = (e) => {
    setNewName(e.target.value)
  }

  const handleAddPhone = (e) => {
    setNewPhone(e.target.value)
  }

  const sendForm = (e) => {
    e.preventDefault()
    if (existingUserAlert(newName)){
      return
    }
    setPersons(
      persons.concat(
        {name: newName.trim(),
        phone: newPhone
        })
    )
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={sendForm}>
        <div>
          <div>name: <input onChange={handleAddName} value={newName} required /></div>
          <div>number: <input onChange={handleAddPhone} value={newPhone} required /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, id)=>{
        return <p key={id}>{person.name} {person.phone}</p>
      })}
    </div>
  )
}

export default App