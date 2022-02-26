import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Persons from './components/Persons'
import Form from './components/Form'
import Notification from './components/Notification'

import phoneServices from './services/phoneServices'

import './style.css'

const App = () => {

  useEffect(()=>{
    phoneServices
      .getPhoneData()
      .then(res=>{
        setPersons(res.data)
      })
  }, [])


  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('');
  const [notification, setNotification] = useState({message: null, type: null});

  // Functions
  const existingUserAlert = (name) => {
    const allPersons = persons.map(person => person.name.toLowerCase())
    return allPersons.includes(name.toLowerCase())? true: false
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
      const personUpdate = persons.find(person => person.name.toLowerCase() === newName.trim().toLowerCase())
      if(window.confirm(`${newName.trim()} is already added to phonebook, replace the old number with a new one?`)){
        phoneServices
          .updatePhone(personUpdate.id, {name: newName.trim(), number: newPhone})
          .then((res)=>{
            setPersons(persons.map((person)=>person.id === personUpdate.id? res.data: person))
            setNewName('')
            setNewPhone('')
            setSearchName('')
          })
          .catch(()=>{
            setNotification({message: `Information of ${newName.trim()} has already been removed from server`, type: 'U'})
            setTimeout(()=>{
              setNotification({message: null, type: null})
            }, 5000)
          })
      }
    }
    else{ 
      phoneServices
        .addNewPhone({name: newName.trim(), number: newPhone})
        .then((res)=>{
          setPersons(
            persons.concat(res.data)
          )

          setNotification({message: `Added ${newName.trim()}`, type: 'A'})
          setTimeout(()=>{
            setNotification({message: null, type: null})
          }, 5000)

          setNewName('')
          setNewPhone('')
          setSearchName('')
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification.message} type={notification.type} />
      <Filter setSearchName={setSearchName} searchName={searchName}/>
      <h2>add a new</h2>
      <Form onSubmit={sendForm} texts={['name', 'phone']} inputOnChange={[addName, addPhone]} inputValues={[newName, newPhone]} />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} searchName={searchName} />
    </div>
  )
}

export default App