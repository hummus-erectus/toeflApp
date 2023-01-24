import React from 'react'

function About() {
  return (
    <main>
      <div className='page-container'>
        <h1>About this site</h1>
        <p>Welcome to our <strong>TOEFL independent speaking practice</strong> web app!</p>
        <p>My name is Rob Grayson and I have been teaching TOEFL to students in Japan for over six years. I created this website to provide a convenient and effective way for students to prepare for the TOEFL independent speaking section.</p>
        <p>Built using the <a href='https://reactjs.org/'>React library</a>, the website offers a variety of practice questions, all of which were created with the help of the advanced language model, <a href='https://chat.openai.com/'>ChatGPT</a>. The questions are designed to simulate the types of prompts and tasks you can expect to encounter on the actual TOEFL speaking test.</p>
        <p>Our website is completely free to use, whether you're an individual student or a teacher looking for resources to supplement your instruction. It is important to note that TOEFL is a registered trademark of ETS and this site has no affiliation with ETS.</p>
        <p>We hope you find our website to be a valuable resource as you prepare for the TOEFL exam. </p>
        <p><strong>Good luck!</strong></p>
      </div>
    </main>
  )
}

export default About