import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css"; 
import {GoProject} from 'react-icons/go'
import {FaArrowCircleDown} from 'react-icons/fa'
import Hello from '../images/nt.jpg'
import painting from '../images/cropped_painting.jpg'
import { Card, Button } from 'semantic-ui-react'
import {Switch, Link, Route, withRouter, Redirect, BrowserRouter} from 'react-router-dom'


 class CarouselImages extends Component {



    render(){


    return (
    <div className={classes.carousel_container} id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
            <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >
                <div  className={classes.image_container} >
                    <img className={classes.image} src={Hello}  alt="myImage"/>
                    <div  className={classes.h1}>
                       <h1 >I'm Nicholas</h1>
                       <a download href="/Nicholas_Thomson_Resume_8_2021.pdf" rel="opener noreferrer" target="_blank">VIEW CV   <FaArrowCircleDown/></a>
                </div>
                </div>
                <div className={classes.image_container}>
                    <img className={classes.image} src={painting} alt="myImage"/>
                    <div  className={classes.h2}>
                        <br></br>    
                        <br></br>              
                    <Link to={'/projects'}> VIEW PORTFOLIO
                {/* <div className="projects"> */}

                </Link>
                </div>
            </div>
            </Carousel>
    </div>
     )
    }
}
export default CarouselImages



                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <br></br>
                    // <h4>Oil on canvas, by Nicholas Thomson</h4>