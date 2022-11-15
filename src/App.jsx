import React from 'react'
import StartScreen from './Components/StartScreen'
import QuestionScreen from './Components/QuestionScreen'
import questionData from './Components/questionData'

import './App.css'

function App() {

  const [customTime, setCustomTime] = React.useState(
    {
        prepTime: 30, 
        speakTime: 45, 
    }
  )

  const [questionText, setQuestionText] = React.useState("Placeholder question")
  const [useMic, setUseMic] = React.useState(false)

  const [start, setStart] = React.useState(false)
  

  return (
    <div className="app--container">
      { !start
      ?
      <StartScreen 
        customTime={customTime}
        setCustomTime={setCustomTime}
        start={start}
        setStart={setStart}
        questionText={questionText}
        setQuestionText={setQuestionText}
        questionData={questionData}
        useMic={useMic}
        setUseMic={setUseMic}
      />
      :
      <QuestionScreen 
        customTime={customTime}
        questionText={questionText}
        start={start}
        setStart={setStart}
        useMic={useMic}
      />}
    </div>
  )
}

export default App
