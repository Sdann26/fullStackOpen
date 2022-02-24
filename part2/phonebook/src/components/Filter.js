const Filter = ({setSearchName, searchName}) => {
  return (
    <>
      <span>filter shown with </span><input onChange={(e)=>setSearchName(e.target.value)} value={searchName}/>
    </>
  )
}

export default Filter