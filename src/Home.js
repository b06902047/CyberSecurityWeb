import photo from './photo/photograph.jpg';
import Intro from './Components/Intro';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

function Home() {
    const classes = useStyles();
    const myphoto=photo;
    return (
        <>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}>
                <img src={myphoto} alt="yen chen's photograph" width="300"/>
            </Grid>
            <Grid item xs={9}>
                <Intro/>
            </Grid>
        </Grid>
        </>
    );
  }
  
  
  export default Home;