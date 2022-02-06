import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Form from './components/Form'

const App = () => {

  // States
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterPersons, setFilterPersons] = useState(persons)

  // Functions
  const existingUserAlert = (name) => {
    const allPersons = persons.map(person => person.name)
    if (allPersons.includes(name)){
      alert(`${name} is already added to phonebook`)
      return true
    }
    return false
  }

  // handleEvent
  const addName = (e) => {
    setNewName(e.target.value)
  }

  const addPhone = (e) => {
    setNewPhone(e.target.value)
  }

  // submitEvent
  const sendForm = (e) => {
    e.preventDefault()
    if (existingUserAlert(newName.trim())){
      return
    }
    console.log(persons);
    setPersons(
      persons.concat(
        {name: newName.trim(),
        number: newPhone}
      )
    )
    setFilterPersons(
      persons.concat(
        {name: newName.trim(),
        number: newPhone}
      )
    )
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter persons={persons} setFilterPersons={setFilterPersons} />
      <h2>add a new</h2>
      <Form onSubmit={sendForm} texts={['name', 'phone']} inputOnChange={[addName, addPhone]} inputValues={[newName, newPhone]} />
      <h2>Numbers</h2>
      <Persons persons={filterPersons} />
    </div>
  )
}

export default App