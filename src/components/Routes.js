import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import MemeList from "./MemeList";
import GenerateMemes from "./GenerateMemes";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BestMemes from "./BestMemes";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 540,
    paddingTop: 30,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
    },
  },
}));

//Menu selection
const Routes = () => {
  const classes = useStyles();
  const hot = useSelector((state) => state.memes.hot);
  const regular = useSelector((state) => state.memes.regular);

  //Routes switch
  return (
    <Container className={classes.root}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/hot" />
        </Route>

        <Route path="/hot">
          <Typography variant="h4" align="center" color="primary">
            HOT MEMES
          </Typography>
          <MemeList array={hot} />
        </Route>

        <Route path="/regular">
          <Typography variant="h4" align="center" color="primary">
            REGULAR MEMES
          </Typography>
          <MemeList array={regular} />
        </Route>

        <Route path="/generate_meme">
          <Typography variant="h4" align="center" color="primary">
            GENERATE MEMES
          </Typography>
          <GenerateMemes />
        </Route>

        <Route path="/best_memes">
          <Typography variant="h4" align="center" color="primary">
            BEST MEMES
          </Typography>
          <BestMemes />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
