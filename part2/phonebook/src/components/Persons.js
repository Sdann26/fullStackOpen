const Persons = ({persons}) =>{
  return (
    <>
      {persons.map((person, id)=>{
        return <p key={id}>{person.name} {person.number}</p>
      })}
    </>
  )
}

export default Persons