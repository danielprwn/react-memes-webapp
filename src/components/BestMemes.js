import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@mui/material/Typography";

const labels = {
  1: "A bit funny 🤏",
  2: "Very funny 👌",
  3: "Very good 👍",
  4: "Great 🔥",
  5: "The best meme in the world!🌍",
};

const useStyles = makeStyles({
  root: {
    maxWidth: 660,
    display: "flex",
    flexDirection: "column",
    borderRadius: 4,
    flexGrow: 1,
    padding: 12,
    marginBottom: "5%",
  },
});

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.root} id="meme">
        <div style={{ position: "relative", padding: "160" }}>
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily="Lucida Console, Arial"
            fontWeight="bold"
            color="#997c0b"
            border="2px solid #997c0b"
          >
            VOTE FOR THE BEST MEME IN 2021!
          </Typography>
          <br></br>
          <CardMedia
            style={{ height: "100%", width: "100%" }}
            component="img"
            image="https://pbs.twimg.com/media/BNFZxZWCQAImRgS.jpg"
            title="Best Meme"
            alt="best meme"
          />
          <br></br>
          <Rating
            style={{
              position: "relative",
              fontWeight: "25",
              paddingTop: "3%",
              left: "50%",
              bottom: "50%",
              transform: "translate(-50%, -50%)",
            }}
            name="hover-feedback"
            value={value}
            precision={1}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && (
            <Box
              style={{
                fontSize: 26,
                fontWeight: "bold",
                position: "realtive",
                padding: "2%",
                color: "#997c0b",
              }}
            >
              {labels[hover !== -1 ? hover : value]}
            </Box>
          )}
        </div>
      </Card>
    </div>
  );
}
