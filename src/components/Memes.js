import { useDispatch } from "react-redux";
import { upVotes, downVotes } from "../store/votingActions";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";

//Styles
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginBottom: "25px",
  },
  cardActions: {
    justifyContent: "space-evenly",
    marginTop: 5,
    marginBottom: 5,
  },
  b: {
    fontSize: 22,
    paddingLeft: 10,
  },
});

const Memes = ({ title, img, upvotes, downvotes, id }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Box sx={{ boxShadow: 14 }}>
      <Card className={classes.root}>
        <CardHeader title={title} />
        <Divider />
        <CardMedia component="img" alt={title} image={img} />
        <CardActions className={classes.cardActions}>
          <IconButton
            aria-label="add up vote"
            color="primary"
            onClick={() => dispatch(upVotes({ upvotes, id, type: "upvotes" }))}
          >
            <ArrowUpwardIcon />
            <b className={classes.b}>{upvotes}</b>
          </IconButton>

          <IconButton
            aria-label="add down vote"
            color="secondary"
            onClick={() =>
              dispatch(downVotes({ downvotes, id, type: "downvotes" }))
            }
          >
            <ArrowDownwardIcon />
            <b className={classes.b}>{downvotes}</b>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Memes;
