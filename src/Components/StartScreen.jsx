import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import CustomizeForm from './CustomizeForm'

export default function StartScreen(props) {
    
    const [customQuestion, setCustomQuestion] = React.useState("")

    const [questionSourceType, setQuestionSourceType] = React.useState(0)

    function handleCustomQuestionChange(event) {
        setCustomQuestion(event.target.value)
        console.log(customQuestion)
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
        props.setQuestionText(customQuestion)
        console.log(props.customTime)
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
                            <p>Tab 1 works!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Tab 2 works!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Tab 3 works!</p>
                            <input 
                                type="text"
                                placeholder="Type your question here"
                                // className="form--input"
                                name="customText"
                                value={customQuestion}
                                onChange={handleCustomQuestionChange}
                            />
                        </TabPanel>
                    </Tabs>
                </div>
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
        </main>
    )
}