import React from 'react'

const Header = ({course}) => {
  return(
    <h2>{course}</h2>
  )
}

const Total = ({parts}) => {
  const total = parts.map(part => {
    return part.exercises
  }).reduce((previewExercise, currentExercise) => {
    return previewExercise + currentExercise
  }, 0)
  return (
    <strong>total of {total} exercises</strong>
  )
}

const Content = ({parts}) => {
  return(
    <>
      {parts.map((part) => <Part name={part.name} exercises={part.exercises} key={part.id} /> )}
    </>
  )
}

const Part = ({name, exercises}) => {
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Course = ({name, parts}) => {
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Course