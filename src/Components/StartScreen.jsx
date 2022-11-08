import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomizeForm from './CustomizeForm'

export default function StartScreen(props) {
    const [customQuestion, setCustomQuestion] = React.useState("")

    const [questionSourceType, setQuestionSourceType] = React.useState(0)

    function handleCustomQuestionChange(event) {
        setCustomQuestion(event.target.value)
        console.log(customQuestion)
    }


    return(
        <main>
            <h1> TOEFL Independent Speaking Practice</h1>
            <h3> Test your speaking skills and prepare for the TOEFL exam!</h3>
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
            <CustomizeForm 
                customTime={props.customTime}
                setCustomTime={props.setCustomTime}
                // start={props.Start}
                setStart={props.setStart}
            />
            
        </main>
    )
}