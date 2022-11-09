import React from 'react'

export default function QuestionScreen (props) {

    const [prepCounter, setPrepCounter] = React.useState(props.customTime.prepTime)
    const [speakCounter, setSpeakCounter] = React.useState(props.customTime.speakTime)
    const [prepTime, setPrepTime] = React.useState(true)
    const question = props.questionText

    React.useEffect(() => {
        prepCounter > 0 && setTimeout(() => setPrepCounter(prepCounter - 1), 1000)
        if (prepCounter===0){
            function delay(time) {
                return new Promise(resolve => setTimeout(resolve, time));
            }
            delay(1000).then(() => setPrepTime(false));
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

    

    return(
        <div className='question--container'>
            <h1 className='question--text'>{question}</h1>
            {prepTime ?
                <h2 className='question--counter'>Preparation time remaining: {prepCounter}</h2>
                :
                <h2 className='question--counter'>Speaking time remaining: {speakCounter}</h2>
            }
            {speakCounter===0 && 
                <button onClick={handleRestartButtonClick}>Restart Speaking Timer</button>
            }
        </div>
    )
}