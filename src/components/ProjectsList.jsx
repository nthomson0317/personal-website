import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './Project.css'
import orchid from '../components/images/orchid_logo.jpg'
import AppBar from '@material-ui/core/AppBar';
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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Nicholas Thomson
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
      {name: "Beanies, Baby!", url: 'https://www.youtube.com/embed/SjcJoyO0lHI', thumbnail: 'https://tycdn.azureedge.net/static/dist/client/img/ty-logo-lg.07ca167.png', description: 'An e-commerce site that allows users to shop for and purchase beanie babies.'}, 
      {name: "Mega Bytes", url: '', thumbnail: 'https://media.istockphoto.com/vectors/creative-hamburger-logo-design-symbol-vector-illustration-vector-id1156464773?k=6&m=1156464773&s=170667a&w=0&h=mvSWZ1-0BJXoWR5AYvrLMm0-pjvsqEy7UPdo8iOONmI=', description: 'An Instagram-like app for recipes'}]
  



    return (
      <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Portfolio
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The apps below were all made with a React frontend and a Rails backend.
            </Typography>
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
                    {card.link?  <Button size="small" color="primary" href={card.link}>
                      Site
                    </Button> : null }
                    {card.url? 
                    <Button size="small" color="primary" href={card.url}>
                      Demo
                    </Button> : null }
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>

        
    )
}

