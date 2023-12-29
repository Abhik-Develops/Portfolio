import React from 'react'
import './skills.css'
import UIDesign from '../../Assets/images/ui-design.png'
import WebDesign from '../../Assets/images/website-design.png'
import AppDesign from '../../Assets/images/app-design.png'

const Skills = () =>{
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web developer with experience in HTML, CSS, and JavaScript.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>Proficient in crafting engaging user interfaces with a focus on responsiveness and aesthetics. Skilled in HTML, CSS, and JavaScript, with expertise in React for building dynamic and interactive web applications. Passionate about creating seamless, user-friendly experiences through clean and efficient code.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend Development</h2>
                        <p>Experienced in building robust and scalable server-side applications using Django. Proficient in designing database models, creating RESTful APIs, and implementing backend logic to support dynamic web applications. Committed to delivering high-performance solutions with a strong emphasis on code quality and maintainability.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Fullstack Development</h2>
                        <p>Versatile in leveraging a spectrum of technologies to bring digital ideas to life. Proficient in front-end technologies like HTML, CSS, and JavaScript, with a specialization in React for creating dynamic user interfaces. On the backend, adept at building robust applications using Django, while seamlessly integrating SQL and MongoDB databases to ensure efficient data management. Experienced in crafting and optimizing database queries for performance and scalability. Additionally, well-versed in version control systems like Git and collaborative development workflows. Committed to staying abreast of emerging technologies and adopting best practices for efficient and scalable development.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills