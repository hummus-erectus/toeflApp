import React from 'react'

export default function QuestionScreen (props) {

    const [prepTime, setPrepTime] = React.useState(true)
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
            delay(1000).then(() => setPrepTime(false))
            }else{
                setPrepTime(false) 
            }
        }
      }, [prepCounter]
    );

    React.useEffect(() => {
        if (!prepTime){
            speakCounter > 0 && setTimeout(() => setSpeakCounter(speakCounter - 1), 1000)
        }
      }, [prepTime, speakCounter]
    );

    function handleRestartButtonClick(){
        setSpeakCounter(props.customTime.speakTime)
    }

    function handleChooseButtonClick(){
        props.setStart(false)
    }

    

    return(
        <div className='question--container'>
            <h1 className='question--text'>{question}</h1>
            {prepTime ?
                <h2 className='question--counter'>Preparation time remaining: {prepCounter}</h2>
                :
                <h2 className='question--counter'>Speaking time remaining: {speakCounter}</h2>
            }
            <div className='question--buttons-container'>
                <button className="choose-again-button" onClick={handleChooseButtonClick}>Choose a Different Question</button>
                {speakCounter===0 && 
                    <button className="restart-button" onClick={handleRestartButtonClick}>Restart Speaking Timer</button>
                } 
            </div>
        </div>
    )
}