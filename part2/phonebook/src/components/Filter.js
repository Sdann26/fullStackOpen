const Filter = ({persons, setFilterPersons}) => {
  const searchNumbers = (e) => {
    const filteredPersons = persons.filter((person) => {
      const name = person.name.toLowerCase()
      return name.includes(e.target.value)
    })
    setFilterPersons(filteredPersons)
  }
  return (
    <>
      <span>filter shown with </span><input onChange={searchNumbers} defaultValue={''}/>
    </>
  )
}

export default Filter