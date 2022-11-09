import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
// import questionData from './questionData'
// import CustomizeForm from './CustomizeForm'

export default function StartScreen(props) {
    
    const [customQuestion, setCustomQuestion] = React.useState("")
    const [questionSourceType, setQuestionSourceType] = React.useState(0)
    const [userSelectedQuestion, setUserSelectedQuestion] = React.useState("")

    function handleCustomQuestionChange(event) {
        setCustomQuestion(event.target.value)
    }

    function handleQuestionSelect(event) {
        setUserSelectedQuestion(event.target.value)
    }

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
        props.setStart(true)
        if (questionSourceType === 0){
            const randomNumber = Math.floor(Math.random() * props.questionData.length)
            const randomQuestion = props.questionData[randomNumber].question
            props.setQuestionText(randomQuestion)
        }
    
        else if(questionSourceType ===1){
            props.setQuestionText(userSelectedQuestion)
        }
        
        else if(questionSourceType === 2){
            props.setQuestionText(customQuestion)
        } 
    }


    return(
        <main>
            <h1> TOEFL Independent Speaking Practice</h1>
            <h3> Test your speaking skills and prepare for the TOEFL exam!</h3>
            <form onSubmit={handleSubmit}>
                <div className='start--question-type'>
                    <Tabs className="Tabs" onSelect={(index) => setQuestionSourceType(index)}>
                        <TabList>
                            <Tab>Try a random question</Tab>
                            <Tab>Choose from our database</Tab>
                            <Tab>Type your own question</Tab>
                        </TabList>
                        <TabPanel>
                            <p>Get ready for a random TOEFL independent speaking question!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Browse by category and find a question that's right for you!</p>
                            <select 
                                className='question--list'
                                size="5" 
                                onChange={handleQuestionSelect}
                                required={questionSourceType === 1}
                            >
                                    {props.questionData.map((q) => (
                                        <option value={q.question}>
                                            <p onClick={(event)=>handleQuestionSelect(event, q)}>{q.question}</p>
                                        </option>
                                    ))}
                            </select>
                        </TabPanel>
                        <TabPanel>
                            <p>Come up with a great question of your own!</p>
                            <input 
                                className='question--input'
                                type="text"
                                placeholder="Type your question here"
                                name="customText"
                                value={customQuestion}
                                onChange={handleCustomQuestionChange}
                                required={questionSourceType === 2}
                            />
                        </TabPanel>
                    </Tabs>
                </div>
            <label>
                Preparation time in seconds:
                <input
                    type="number"
                    min="0"
                    max="60"
                    onChange={handleChange}
                    name="prepTime"
                    value={props.customTime.prepTime}
                />
            </label>
            <label>
                Speaking time in seconds:
                <input
                    type="number"
                    min="0"
                    max="60"
                    onChange={handleChange}
                    name="speakTime"
                    value={props.customTime.speakTime}
                />
            </label>
            <input type="submit" value="Start" />
            </form>  
        </main>
    )
}