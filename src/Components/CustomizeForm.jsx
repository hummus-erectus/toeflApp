import React from 'react'

export default function CustomizeForm (props) {

    function handleChange(event) {
        const {name, value} = event.target
        props.setCustomTime(prevData => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(props.customTime)
    }

    return(
        <form onSubmit={handleSubmit}>
        <label>
            Preparation time in seconds:
            <input
                type="number"
                onChange={handleChange}
                name="prepTime"
                value={props.customTime.prepTime}
            />
        </label>
        <label>
            Speaking time in seconds:
            <input
                type="number"
                onChange={handleChange}
                name="speakTime"
                value={props.customTime.speakTime}
            />
        </label>
        <input type="submit" value="Start" />
    </form>    
    )
}