import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import VoiceRecorder from "../Components/VoiceRecorder"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import chime from '../assets/chime.wav'

export default function QuestionScreen (props) {

    const [question, setQuestion] = useState('')
    const [prepTime, setPrepTime] = useState(true)
    const [userSpeaking, setUserSpeaking] = useState(false)
    const [prepCounter, setPrepCounter] = useState(props.customTime.prepTime)
    const [speakCounter, setSpeakCounter] = useState(props.customTime.speakTime)
    let userQuestion = props.questionText
    const navigate = useNavigate()
    const audio = new Audio(chime)

    useEffect(() => {
        if (!userQuestion){
            const sessionQuestion = sessionStorage.getItem("Question")
            if (sessionQuestion == '' || !sessionQuestion) {
                navigate('/')
            } else {
                userQuestion = sessionQuestion
            }
        }
        sessionStorage.setItem("Question", userQuestion)
        userQuestion && setQuestion(userQuestion)
    }, [])

    useEffect(() => {
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
    )

    useEffect(() => {
        if (userSpeaking){
            speakCounter > 0 ? 
                setTimeout(() => setSpeakCounter(speakCounter - 1), 1000) 
            : 
                setTimeout(() => {
                    setUserSpeaking(false)
                    audio.play()
                }, 1000)
        }
      }, [userSpeaking, speakCounter]
    )

    function handleRestartButtonClick(){
        setUserSpeaking(true)
        setSpeakCounter(props.customTime.speakTime)
    }

    function handleChooseButtonClick(){
        props.setStart(false)
        props.setUseMic(false)
        navigate('/')
    }

    return(
        <main>
            <div className='page-container'>
                <h1 className='question--text'>{question}</h1>
                {prepTime ?
                    <h2 className='question--counter'>Preparation time remaining: {prepCounter}</h2>
                    :
                    <h2 className='question--counter'>Speaking time remaining: {speakCounter}</h2>
                }
                {(userSpeaking && props.useMic) &&
                    <div className='question--recording-alert'>
                        <FontAwesomeIcon 
                            className='blink'
                            icon={faMicrophone} 
                        />
                        <p>Recording...</p>
                    </div>
                }
                <div className='question--buttons-container'>
                    <button className="choose-again-button" onClick={handleChooseButtonClick}>Choose a Different Question</button>
                    {(speakCounter===0 && userSpeaking===false) && 
                        <button className="restart-button" onClick={handleRestartButtonClick}>Restart Speaking Timer</button>
                    } 
                </div>
                {props.useMic && 
                <VoiceRecorder
                    prepTime={prepTime}
                    userSpeaking={userSpeaking}
                    speakCounter={speakCounter}
                />}
                <div id="recordings-container">
                </div>
            </div>
        </main>
    )
}