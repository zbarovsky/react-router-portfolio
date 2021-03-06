import React from 'react'

function About(props) {
    return (
        <div>
            <h2 className="header">Want to hire me? Why wouldn't you with all of the following qualifications.</h2>
            <ul>
                {props.skills.map((skill) => <li className="skillList" key={skill}>{skill}</li>)}
            </ul>
            <h3 className="header">Want to know more about my portfolio, check out my github account <a href="https://github.com/zbarovsky">Here</a>, or go to my projects page.</h3>
            <h3 className="header">Really like what you see, then check out my resume here: <a href="./img/resume.pdf" download>Download</a> </h3>
        </div>
    )
}

export default About;