import phoneServices from '../services/phoneServices'

const Persons = ({persons, setPersons, searchName}) =>{

  const refreshNumbers = (user)=>{
    if(window.confirm(`delete ${user.name} ?`)){
      phoneServices.deletePhone(user.id)
      setPersons(persons.filter((person)=> person.id !== user.id))
    }
  }

  return (
    <>{
      persons.filter((person) => {
        const name = person.name.toLowerCase()
        return name.includes(searchName.toLowerCase())
      }).map((person)=>{
        return (
          <div key={person.id}>
            <span>{person.name} {person.number} </span>
            <button onClick={()=>refreshNumbers(person)}>delete</button>
          </div>
        )
      })
    }</>
  )
}

export default Persons