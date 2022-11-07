import React from 'react'
import CustomizeForm from './CustomizeForm'

export default function StartScreen(props) {


    return(
        <main>
            <h1> TOEFL Independent Speaking Practice</h1>
            <h3> Test your speaking skills and prepare for the TOEFL exam!</h3>
            <div className='start--question-type'>
                <button> Try a random question</button>
                <button> Choose from our database</button>
                <button> Type your own question</button>
            </div>
            <CustomizeForm 
                customTime={props.customTime}
                setCustomTime={props.setCustomTime}
            />
            
        </main>
    )
}