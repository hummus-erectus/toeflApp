import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import StartScreen from './Pages/StartScreen'
import QuestionScreen from './Pages/QuestionScreen'
import Navbar from './Components/Navbar'
// import questionData from './Components/questionData'  <-- used if not calling API

import './App.css'

function App() {

  const [questionData, setQuestionData] = useState([])
  const [questionText, setQuestionText] = useState("")
  const [useMic, setUseMic] = useState(false)
  const [start, setStart] = useState(false)
  const [customTime, setCustomTime] = useState(
    {
        prepTime: 30, 
        speakTime: 45 
    }
  )
    
  useEffect(() => {
      async function getQuestions(){
        const res = await fetch("https://toefl-speaking-api.netlify.app/questions.json")
        const data = await res.json()
        setQuestionData(data.results)
      }
      getQuestions()
    }, [])

  return (
    // questionData.length>0 && <div className="app--container">
    //   { !start
    //   ?
    //   <StartScreen 
    //     customTime={customTime}
    //     setCustomTime={setCustomTime}
    //     start={start}
    //     setStart={setStart}
    //     questionText={questionText}
    //     setQuestionText={setQuestionText}
    //     questionData={questionData}
    //     useMic={useMic}
    //     setUseMic={setUseMic}
    //   />
    //   :
    //   <QuestionScreen 
    //     customTime={customTime}
    //     questionText={questionText}
    //     start={start}
    //     setStart={setStart}
    //     useMic={useMic}
    //     setUseMic={setUseMic}
    //   />}
    // </div>

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={questionData.length>0 && <StartScreen 
              customTime={customTime}
              setCustomTime={setCustomTime}
              start={start}
              setStart={setStart}
              questionText={questionText}
              setQuestionText={setQuestionText}
              questionData={questionData}
              useMic={useMic}
              setUseMic={setUseMic}
          
          />} />
          <Route path='/question' element={<QuestionScreen 
            customTime={customTime}
            questionText={questionText}
            start={start}
            setStart={setStart}
            useMic={useMic}
            setUseMic={setUseMic}
          />} />
          {/* <Route path='/about' element={<About />} /> */}

        </Routes>
      </Router>
    </>

  )
}

export default App
