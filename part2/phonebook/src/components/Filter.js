const Filter = ({filtered, searchName}) => {
  return (
    <>
      <span>filter shown with </span><input onChange={filtered} value={searchName}/>
    </>
  )
}

export default Filter