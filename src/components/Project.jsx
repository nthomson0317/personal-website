import React, { useState } from 'react'
import { Card, Button } from 'semantic-ui-react'
import ReactDOM from "react-dom";
import './Project.css'

export default function Project(props) {
    const[flipped, setIsFlipped]=useState(false)


    const handleClick = () => {
        setIsFlipped(!flipped)
      }


    return (
        <div class="ui link cards">
      <br></br>
        <Card 
        onClick={handleClick}
        style={{width:600}}
        >   
        {flipped ? <p className="ui_card"><h1>{props.project.name}</h1> <br/><div className="video-responsive">
        <iframe width="560" height="315" src={`${props.project.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div></p> : 
          <div id="flipped">
            <div className="content">
            <div className="center aligned header">
            <a class="ui black label">
            <h1 class="large text">{props.project.name}</h1>
          </a>
              </div>
          </div>
          <div className="image">
            <img class="mdc-image-list__image"
            src={props.project.thumbnail}
             alt="oh no!" 
             width="290px" 
             height="auto"/>
          </div>
          
          <div className="extra content">
            <span>
              <i className="price" />
              <h3 class="large text">{props.project.description}</h3>
            </span>
            <div>
                <h3> Click card to see app walkthrough</h3>
            </div>
          </div>
        </div>
      }
        </Card>
        Link to site: {project.link}
        <br></br>
        </div>
    )
}
