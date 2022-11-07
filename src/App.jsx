import React from 'react'
import StartScreen from './Components/StartScreen'

import './App.css'

function App() {

  const [customTime, setCustomTime] = React.useState(
    {
        prepTime: 30, 
        speakTime: 45, 
    }
  )

  const [start, setStart] = React.useState(false)
  

  return (
    <div className="App">
      { !start
      ?
        <StartScreen 
        customTime={customTime}
        setCustomTime={setCustomTime}
        start={start}
        setStart={setStart}
      />
      :
      testing}
    </div>
  )
}

export default App
