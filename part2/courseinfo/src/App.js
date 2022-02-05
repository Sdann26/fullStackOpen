import React from 'react'

const Header = ({course}) => {
  return(
    <h1>{course}</h1>
  )
}

const Total = ({parts}) => {
  const total = parts.map(part => {
    return part.exercises
  }).reduce((previewExercise, currentExercise) => {
    return previewExercise + currentExercise
  }, 0)
  return (
    <p>Number of exercises {total}</p>
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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App