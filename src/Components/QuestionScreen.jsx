import React from 'react'

export default function QuestionScreen (props) {

    const [prepCounter, setPrepCounter] = React.useState(props.customTime.prepTime)
    const [speakCounter, setSpeakCounter] = React.useState(props.customTime.speakTime)
    const [prepTime, setPrepTime] = React.useState(true)

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

    return(
        <div>
            <h1>Question text here</h1>
            {prepTime ?
                <h2>Preparation time remaining: {prepCounter}</h2>
                :
                <h2>Speaking time remaining: {speakCounter}</h2>
            }
        </div>
    )
}