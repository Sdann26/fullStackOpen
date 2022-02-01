import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
}

const App = () => {
  // State
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // eventHandlers
  const addGoodCount = () => { setGood(good + 1) }
  const addNeutralCount = () => { setNeutral(neutral + 1) }
  const addBadCount = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGoodCount} text='good' />
      <Button onClick={addNeutralCount} text='neutral' />
      <Button onClick={addBadCount} text='bad' />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App