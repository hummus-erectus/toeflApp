import React from 'react'
import StartScreen from './Components/StartScreen'
import QuestionScreen from './Components/QuestionScreen'
// import questionData from './Components/questionData'

import './App.css'

function App() {

  const [questionData, setQuestionData] = React.useState([])
    
    React.useEffect(() => {
        async function getQuestions(){
          const res = await fetch("https://toefl-speaking-api.netlify.app/questions.json")
          const data = await res.json()
          setQuestionData(data.results)
        }
        getQuestions()
      }, [])

  const [customTime, setCustomTime] = React.useState(
    {
        prepTime: 30, 
        speakTime: 45 
    }
  )

  const [questionText, setQuestionText] = React.useState("Placeholder question")
  const [useMic, setUseMic] = React.useState(false)

  const [start, setStart] = React.useState(false)
  

  return (
    questionData.length>0 && <div className="app--container">
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
        setUseMic={setUseMic}
      />}
    </div>
  )
}

export default App
