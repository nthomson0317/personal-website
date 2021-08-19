import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is NICHOLAS THOMSON I am a full-stack software engineer and Technical Writer at Datadog. My transition to tech began during the pandemic, when I left my job as an Assistant Editor at Alfred A. Knopf, where I worked with luminary authors such as Henry Louis Gates Jr., Fernando Aramburu, Giulio Boccaletti, and Kent Russell. All my life I have studied languages, including French, Russian, Attic Greek, and the memories of hours spent poring over foreign dictionaries first led me to programming. Once I began learning to code, I discovered that this field of inquiry called upon similar skills to those I had developed over the years as an enthusiastic patzer at the chess board. Every day, I’m learning more, and I am excited to create appealing, interactive worlds within the browser.   </p>
                         <p className={classes.br}>
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;