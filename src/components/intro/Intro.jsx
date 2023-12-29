import React from 'react';
import './intro.css'
import bg from '../../Assets/images/image.png'
import { Link } from 'react-scroll';
import btnImg from '../../Assets/images/hireme.png'

const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Abhik</span><br />Web Developer</span>
                <p className="introPara">I am a passionate web developer with experience in creating <br />visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="hireme" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className='bg'/>
        </section>
    )
}

export default Intro