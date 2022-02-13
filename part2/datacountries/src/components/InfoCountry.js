import InfoEspecify from "./InfoEspecify";

const InfoCountry = ({ filterListCountries, setFilterListCountries})=>{

  if (filterListCountries.length === 0){
    return null
  }

  return(
    <>
      {filterListCountries.length>10
        ?<div>Too many matches, specify another filter</div>
        :(filterListCountries.length<=10 && filterListCountries.length>1)
        ?filterListCountries.map((filterListCountry, id)=>{
          return <div key={filterListCountry.ccn3}>
            {filterListCountry.name.common} 
            <button 
              onClick={
                ()=>{
                  setFilterListCountries([filterListCountry])
              }}>
              show
            </button>
          </div>
        })
        : <InfoEspecify data={filterListCountries[0]}/>}
    </>    
  )
}

export default InfoCountry