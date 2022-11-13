import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import randomBox from "../assets/randomBox.png"
// import questionData from './questionData'
// import CustomizeForm from './CustomizeForm'

export default function StartScreen(props) {

    
    
    const [customQuestion, setCustomQuestion] = React.useState("")
    const [questionSourceType, setQuestionSourceType] = React.useState(0)
    const [userSelectedQuestion, setUserSelectedQuestion] = React.useState("")

    // state for questions filtered by category
    const [filteredQuestions, setFilteredQuestions] = React.useState(props.questionData)

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

    // FIlter for question categories
    const categories = [...new Set(props.questionData.map((Val) => Val.category))]

    const filterItem = (curcat) => {
        const filteredQuestionsArray = props.questionData.filter((newVal) => {
            // console.log(curcat.Val)
          return newVal.category === curcat.Val 
          
                // comparing category for displaying data
        })
        setFilteredQuestions(filteredQuestionsArray)
        // console.log(filteredQuestionsArray)
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
                            <div className="tab--container">
                                <p>Get ready for a random TOEFL independent speaking question!</p>
                                <img className='random-img' src={randomBox} alt="Randomize Symbol"/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="tab--container">
                                <p>Browse by category and find a question that's right for you!</p>
                                <div className='question--category-radios'>
                                    <input
                                        type='radio'
                                        className='category-radio'
                                        id={"all"}
                                        name="category-radios" 
                                        onChange={() => setFilteredQuestions(props.questionData)}
                                        checked={filteredQuestions===props.questionData}
                                    />
                                    <label htmlFor={"all"} >
                                        All
                                    </label>
                                    
                                    {categories.map((Val, id) => {
                                        return (
                                            <div key={id}>
                                                <input 
                                                    type="radio"  
                                                    id={Val}
                                                    name="category-radios"
                                                    className='category-button' 
                                                    value={Val}
                                                    onChange={() => filterItem({Val})}
                                                    checked={filteredQuestions!==props.questionData && filteredQuestions[0].category===Val}
                                                />
                                                <label htmlFor={Val} >
                                                    {Val}
                                                </label>
                                            </div>
                                        
                                            
                                            
                                            // <button
                                            //     type='button'
                                            //     className='category-button'
                                            //     onClick={() => filterItem({Val})}
                                            //     key={id}
                                            // >
                                            //     {Val}
                                            // </button> 
                                        )
                                    })}
                                </div>
                                <div className="question--list">
                                    {filteredQuestions.map((q) => (
                                        <div key={q.id}>
                                            <input 
                                                type="radio" 
                                                id={q.id} 
                                                name="radios" 
                                                value={q.question}
                                                onChange={handleQuestionSelect}
                                                required={questionSourceType ===1}
                                            />
                                            <label htmlFor={q.id} >
                                                {q.question}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="tab--container">
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
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className='question--time-inputs-container'>
                    <label>
                        <span className='time-label'>Preparation time:</span><br/>
                        <input
                            className='number-input'
                            type="number"
                            min="0"
                            max="60"
                            onChange={handleChange}
                            name="prepTime"
                            value={props.customTime.prepTime}
                            required={true}
                        />
                        <span className = "seconds-label">Seconds</span>
                    </label>
                    <label>
                    <span className='time-label'>Speaking time:</span><br/>
                        <input
                            className='number-input'
                            type="number"
                            min="0"
                            max="60"
                            onChange={handleChange}
                            name="speakTime"
                            value={props.customTime.speakTime}
                            required={true}
                        />
                        <span className = "seconds-label">Seconds</span>
                    </label> 
                </div>
                <div className='start-button-container'>
                    <input className='start-button' type="submit" value="Start!"/>
                </div>
                
            </form>  
        </main>
    )
}