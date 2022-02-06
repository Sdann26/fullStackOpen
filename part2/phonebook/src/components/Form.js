const Input = ({text, onChange, value}) => {
  return (
    <>
      <div>{text}: <input onChange={onChange} value={value} required /></div>
    </>
  )
}

const Form = ({onSubmit, texts, inputOnChange, inputValues})=> {
  return(
    <form onSubmit={onSubmit}>
      <div>
        {texts.map((_, i)=><Input key={i} text={texts[i]} onChange={inputOnChange[i]} value={inputValues[i]} />)}
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form