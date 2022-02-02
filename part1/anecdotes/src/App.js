import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const Display = ({anecdotes, votes, index})=>{
  return (
    <>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  // States
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [anecdoteMostVoted, setAnecdoteMostVoted] = useState(0)

  // Functions
  const randomValue = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const addVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
    setAnecdoteMostVoted(Math.max(...copyVotes))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdotes={anecdotes} votes={votes} index={selected} />
      <Button onClick={addVote} text='vote' />
      <Button onClick={randomValue} text='next anecdote' />
      {Math.max(...votes) === 0 
        ? <></> 
        : <>
            <h1>Anecdote with most votes</h1> 
            <Display anecdotes={anecdotes} votes={votes} index={votes.indexOf(anecdoteMostVoted)}></Display>
          </>}
    </div>
  )
}

export default App