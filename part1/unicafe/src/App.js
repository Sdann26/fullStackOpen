import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
}

const StatisticLine = ({count, text}) => {
  return text === 'positive' ?  <p>{text} {count} %</p>: <p>{text} {count}</p>
}

const Statistics = ({statistics}) => {
  return ( 
    (statistics.good === 0 && statistics.neutral === 0 && statistics.bad === 0)
      ?<p>No Feedback given</p>
      :<>
        <StatisticLine count={statistics.good} text='good' />
        <StatisticLine count={statistics.neutral} text='neutral' />
        <StatisticLine count={statistics.bad} text='bad' />
        <StatisticLine count={statistics.all} text='all' />
        <StatisticLine count={statistics.average} text='average' />
        <StatisticLine count={statistics.positive} text='positive' />
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
      <h1>statistics</h1>
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App
