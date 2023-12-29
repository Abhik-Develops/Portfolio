import React, { useRef } from 'react'
import './contact.css'
import React_logo from '../../assets/images/react_logo.png'
import Django from '../../assets/images/django-logo-negative.png'
import C_logo from '../../assets/images/c++.png'
import Database from '../../assets/images/database.png'
import LinkedinIcon from '../../assets/images/linkedin_icon.png'
import GithubIcon from '../../assets/images/github_icon.png'
import LeetIcon from '../../assets/images/leetcode_icon.png'
import CodechefIcon from '../../assets/images/codechef_icon.png'
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uwp2xio', 'template_ac38t6i', form.current, 'edEE1fwGwOyEsPmFT')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              alert('Email sent sucessfully')
          }, (error) => {
              console.log(error.text);
          });
    };

    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Skills</h1>
                <p className="clientsDesc">I'm proficient in a wide array of technologies, from programming languages like C and C++ to web development tools like HTML/CSS and JavaScript, enabling me to offer assistance and insights in a broad spectrum of technical areas.</p>
                <div className="clientImgs">
                    <img src={React_logo} alt="clientImg" className="clientImg" />
                    <img src={Django} alt="clientImg" className="clientImg" />
                    <img src={Database} alt="clientImg" className="clientImg" />
                    <img src={C_logo} alt="clientImg" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <input type="text" name="from_name" className="name" placeholder='Your Name'/>
                    <input type="email" name="from_email" className='email' id="email" placeholder='Your Email'/>
                    <textarea name="message" className="msg" id="" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' className="submitBtn" value="Send">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/abhik-ganguly-2338ab286"><img src={LinkedinIcon} alt="FacebookIcon" className="link" /></a>
                        <a href="https://github.com/Abhik-Develops"><img src={GithubIcon} alt="TwitterIcon" className="link" /></a>
                        <a href="https://leetcode.com/U_N_K_N_O_W_N_0/"><img src={LeetIcon} alt="YoutubeIcon" className="link" /></a>
                        <a href="https://www.codechef.com/users/the_unknown_0"><img src={CodechefIcon} alt="InstagramIcon" className="link" /></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;