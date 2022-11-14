import React from 'react'
import VoiceRecorder from "./VoiceRecorder"

export default function QuestionScreen (props) {

    const [prepTime, setPrepTime] = React.useState(true)
    const [userSpeaking, setUserSpeaking] = React.useState(false)
    const [prepCounter, setPrepCounter] = React.useState(props.customTime.prepTime)
    const [speakCounter, setSpeakCounter] = React.useState(props.customTime.speakTime)
    const question = props.questionText

    React.useEffect(() => {
        if (prepCounter > 0){
            setTimeout(() => setPrepCounter(prepCounter - 1), 1000)
        }else{
            if(props.customTime.prepTime>0){
                function delay(time) {
                    return new Promise(resolve => setTimeout(resolve, time))
                }
            delay(1000).then(() => {
                setPrepTime(false)
                setUserSpeaking(true)
            })
            }else{
                setPrepTime(false)
                setUserSpeaking(true) 
            }
        }
      }, [prepCounter]
    );

    React.useEffect(() => {
        if (userSpeaking){
            speakCounter > 0 ? setTimeout(() => setSpeakCounter(speakCounter - 1), 1000) : setTimeout(() => setUserSpeaking(false), 1000)
        }
      }, [userSpeaking, speakCounter]
    )

    // React.useEffect(() => {
    //     if (speakCounter===0){
    //         setTimeout(() => setUserSpeaking(false), 3000)
    //     }
    //   }, [userSpeaking, speakCounter]
    // )

    function handleRestartButtonClick(){
        setUserSpeaking(true)
        setSpeakCounter(props.customTime.speakTime)
    }

    function handleChooseButtonClick(){
        props.setStart(false)
    }

    

    return(
        <div id="q-container" className='question--container'>
            <h1 className='question--text'>{question}</h1>
            {prepTime ?
                <h2 className='question--counter'>Preparation time remaining: {prepCounter}</h2>
                :
                <h2 className='question--counter'>Speaking time remaining: {speakCounter}</h2>
            }
            <div className='question--buttons-container'>
                <button className="choose-again-button" onClick={handleChooseButtonClick}>Choose a Different Question</button>
                {(speakCounter===0 && userSpeaking===false) && 
                    <button className="restart-button" onClick={handleRestartButtonClick}>Restart Speaking Timer</button>
                } 
            </div>
            <VoiceRecorder
                prepTime={prepTime}
                userSpeaking={userSpeaking}
                speakCounter={speakCounter}
            />
        </div>
    )
}