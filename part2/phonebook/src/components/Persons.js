import phoneServices from '../services/phoneServices'

const Persons = ({persons, setPersonFilter}) =>{

  const refreshNumbers = (user)=>{
    if(window.confirm(`delete ${user.name} ?`)){
      phoneServices.deletePhone('http://localhost:3001/persons', user.id)
      setPersonFilter(persons.filter((person)=> person.id !== user.id))
    }
  }

  return (
    <>
      {persons.map((person)=>{
        return (<div key={person.id}>
          <span>{person.name} {person.number} </span>
          <button onClick={()=>refreshNumbers(person)}>delete</button>
        </div>)
      })}
    </>
  )
}

export default Persons