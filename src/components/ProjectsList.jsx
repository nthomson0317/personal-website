import React, { useState } from 'react'
import { Card, Button } from 'semantic-ui-react'
import Project from './Project'
import './Project.css'
import orchid from '../components/images/orchid_logo.jpg'
// import '@fontsource/roboto'




export default function ProjectsList(props) {





    let projects = [{name: "Orchid", url: "https://www.youtube.com/embed/lUjXOi96-VU", thumbnail: orchid, description: 'A Spotify-like app designed for classical music', link: 'https://orchid-app.herokuapp.com/'},
      {name: "Open Chessame", url:'https://www.youtube.com/embed/dW_hUm2-UtY', thumbnail: 'https://cdn.dribbble.com/users/230124/screenshots/5350574/knight.jpg?compress=1&resize=400x300', description: 'A user-based app for players to improve their chess openings.', link: 'https://open-chessame.herokuapp.com/'},
      {name: "Beanies, Baby!", url: 'https://www.youtube.com/embed/SjcJoyO0lHI', thumbnail: 'https://tycdn.azureedge.net/static/dist/client/img/ty-logo-lg.07ca167.png', description: 'An e-commerce site that allows users to shop for and purchase beanie babies.', link: ''}, 
      {name: "Mega Bytes", url: '', thumbnail: 'https://media.istockphoto.com/vectors/creative-hamburger-logo-design-symbol-vector-illustration-vector-id1156464773?k=6&m=1156464773&s=170667a&w=0&h=mvSWZ1-0BJXoWR5AYvrLMm0-pjvsqEy7UPdo8iOONmI=', description: 'An Instagram-like app for recipes', link: ''}]
    let renderProjects = 
    projects.map(project => (
      <Project
        key={project.id}
        project={project}>
      </Project>
    )) 
    



    return (

        <div>
        <Card.Group itemsPerRow={3} >
          {renderProjects}
          </Card.Group>
          </div>
        
    )
}
