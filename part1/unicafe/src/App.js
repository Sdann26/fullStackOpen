import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
}

const Statistics = ({statistics}) => {
  return (
    <>
      <h1>statistics</h1>
      <p>good {statistics.good}</p>
      <p>neutral {statistics.neutral}</p>
      <p>bad {statistics.bad}</p>
      <p>all {statistics.all}</p>
      <p>average {statistics.average}</p>
      <p>positive {statistics.positive} %</p>
    </>
  )
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

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: good + neutral + bad,
    average: (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad),
    positive: (good / (good + neutral + bad)) * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGoodCount} text='good' />
      <Button onClick={addNeutralCount} text='neutral' />
      <Button onClick={addBadCount} text='bad' />
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App
