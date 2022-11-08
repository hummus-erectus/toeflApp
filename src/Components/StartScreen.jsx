import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CustomizeForm from './CustomizeForm'

export default function StartScreen(props) {


    return(
        <main>
            <h1> TOEFL Independent Speaking Practice</h1>
            <h3> Test your speaking skills and prepare for the TOEFL exam!</h3>
            <div className='start--question-type'>
                <Tabs className="Tabs">
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