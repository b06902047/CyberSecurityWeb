import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Chat from './Chat.js';
import Appbar from "./Components/Appbar.js"
import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  back: {
  }
}));

function App() {
  const classes = useStyles();
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Grid className={classes.back}>
      <Appbar />
      <Grid container className={classes.root} spacing={2}>
              <Grid item xs={3}>
                <h4><Link to="/">Home</Link><br /></h4>
              </Grid>
              <Grid item xs={3}>
                <h4><Link to="/chat">Chat</Link></h4>
              </Grid>
              <Grid item xs={6}>
                <h4>參觀人數: {count}</h4>
              </Grid>
      </Grid>
      <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/chat">
              <Chat/>
            </Route>
      </Switch>
      </Grid>
    </Router>
    </>
  );
}


export default App;
