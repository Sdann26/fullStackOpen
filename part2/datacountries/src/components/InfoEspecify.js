import axios from "axios";
import { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_API_KEY

const InfoEspecify = ({data})=>{

  const [dataWeather, setDataWeather] = useState([])

  useEffect(()=>{
    axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${data.capital.map((capital)=>capital)}&APPID=${api_key}`)
    .then((res)=>{setDataWeather(res.data)})
  }, [data.capital])

  const transformCelcius = (kelvin)=>{
    return Math.round((kelvin-273.15)*100)/100
  }

  const selectIcon = (wid) => {
    if(wid>= 200 && wid<300){
      return '11d' 
    }
    if(wid>= 300 && wid<400){
      return '09d' 
    }
    if(wid>= 500 && wid<505){
      return '10d' 
    }
    if(wid === 511){
      return '13d' 
    }
    if(wid>= 520 && wid<600){
      return '09d' 
    }
    if(wid>= 600 && wid<700){
      return '13d' 
    }
    if(wid>= 700 && wid<800){
      return '50d' 
    }
    if(wid === 800) return '01d'
    if(wid === 801) return '02d'
    if(wid === 802) return '03d'
    if(wid === 803 || wid === 804) return '04d'
  }

  return (
    <>
      <h1>{data.name.common}</h1>
      <div>
        <span>capital {data.capital.map((capital)=>capital)}</span><br/>
        <span>area {data.area}</span>
      </div>
      <h3>languages:</h3>
      <ul>
        {Object.values(data.languages).map((language, id)=><li key={id}>{language}</li>)}
      </ul>
      <picture>
        <img src={data.flags.svg} alt={data.name.common} width="200px"/>
      </picture>
      <h2>Weather in {data.capital.map((capital)=>capital)}</h2>
      <span>temperature {transformCelcius(dataWeather?.main?.temp)} </span><br/>
      <picture>
        <img src={`http://openweathermap.org/img/wn/${selectIcon(dataWeather?.weather?.[0]?.id)}@2x.png`} alt={`Icon ${dataWeather?.weather?.[0]?.main}`}/>
      </picture><br/>
      <span>wind {dataWeather?.wind?.speed} m/s</span>
    </>
  )
}

export default InfoEspecify;