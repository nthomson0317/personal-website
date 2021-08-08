import React, { useState } from 'react'
import { Card, Button } from 'semantic-ui-react'
import Project from './Project'
import './Project.css'
import orchid from '../components/images/orchid_logo.jpg'
// import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// import '@fontsource/roboto'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function ProjectsList(props) {

  const classes = useStyles();





    let projects = [{name: "Orchid", url: "https://www.youtube.com/embed/lUjXOi96-VU", thumbnail: orchid, description: 'A Spotify-like app designed for classical music', link: 'https://orchid-app.herokuapp.com/', description: 'A Spotify-like app designed for classical music'},
      {name: "Open Chessame", url:'https://www.youtube.com/embed/dW_hUm2-UtY', thumbnail: 'https://cdn.dribbble.com/users/230124/screenshots/5350574/knight.jpg?compress=1&resize=400x300', description: 'A user-based app for players to improve their chess openings.', link: 'https://open-chessame.herokuapp.com/', description: 'An app that helps users improve their chess openings'},
      {name: "Beanies, Baby!", url: 'https://www.youtube.com/embed/SjcJoyO0lHI', thumbnail: 'https://tycdn.azureedge.net/static/dist/client/img/ty-logo-lg.07ca167.png', description: 'An e-commerce site that allows users to shop for and purchase beanie babies.', link: '', description: 'An e-commerce site, which allows users to shop for Beanie Babies'}, 
      {name: "Mega Bytes", url: '', thumbnail: 'https://media.istockphoto.com/vectors/creative-hamburger-logo-design-symbol-vector-illustration-vector-id1156464773?k=6&m=1156464773&s=170667a&w=0&h=mvSWZ1-0BJXoWR5AYvrLMm0-pjvsqEy7UPdo8iOONmI=', description: 'An Instagram-like app for recipes', link: ''}]
    
    //   let renderProjects = projects.map(project => (
    //   <Project
    //     key={project.id}
    //     project={project}>
    //   </Project>
    // )) 
    



    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Portfolio
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.thumbnail}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.link}>
                      Site
                    </Button>
                    <Button size="small" color="primary" href={card.url}>
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>

        
    )
}


// <div>
{/* <Card.Group itemsPerRow={3} >
  {renderProjects}
  </Card.Group>
  </div> */}