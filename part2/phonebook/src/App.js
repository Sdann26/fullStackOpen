import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Persons from './components/Persons'
import Form from './components/Form'

import phoneServices from './services/phoneServices'

const App = () => {

  useEffect(()=>{
    phoneServices.getPhoneData('http://localhost:3001/persons')
      .then(res=>setPersons(res.data))
  }, [])


  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('');

  // Functions
  const existingUserAlert = (name) => {
    const allPersons = persons.map(person => person.name)
    if (allPersons.includes(name)){
      alert(`${name} is already added to phonebook`)
      return true
    }
    return false
  }

  const filteredPersons = persons.filter((person) => {
    const name = person.name.toLowerCase()
    return name.includes(searchName.toLowerCase())
  })

  // handleEvent
  const addName = (e) => {
    setNewName(e.target.value)
  }

  const addPhone = (e) => {
    setNewPhone(e.target.value)
  }

  const filtered = (e) => {
    setSearchName(e.target.value)
  }

  // submitEvent
  const sendForm = (e) => {
    e.preventDefault()
    if (existingUserAlert(newName.trim())){
      return
    }

    phoneServices.addNewPhone('http://localhost:3001/persons', {name: newName.trim(), number: newPhone})
      .then((res)=>console.log(res))
        

    setPersons(
      persons.concat(
        {name: newName.trim(),
        number: newPhone}
      )
    )
    setNewName('')
    setNewPhone('')
    setSearchName('')
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filtered={filtered} searchName={searchName}/>
      <h2>add a new</h2>
      <Form onSubmit={sendForm} texts={['name', 'phone']} inputOnChange={[addName, addPhone]} inputValues={[newName, newPhone]} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App