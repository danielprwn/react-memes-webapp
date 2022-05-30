import { useState } from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 3,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  wrap: {
    padding: "1rem",
  },
  button: {
    margin: "auto",
    width: "24%",

    [theme.breakpoints.up("md")]: {
      "&:last-child": { marginBottom: 0 },
    },
  },

  notActiveButton: {
    "&:hover": {
      background: theme.palette.primary.dark,
      color: theme.palette.text.main,
      borderColor: theme.palette.primary.dark,
    },
  },

  isActiveButton: {
    background: theme.palette.primary.dark,
    color: theme.palette.text.main,
    borderColor: theme.palette.primary.dark,
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));

//Navigation buttons
export default function Menu() {
  const classes = useStyles();
  const [isActiveButton, setActiveButton] = useState("hot");
  const buttons = ["hot", "regular", "generate_meme", "best_memes"];

  const handleClick = (name) => {
    setActiveButton(name);
  };

  const ButtonRoute = buttons.map((name) => (
    <Button
      key={name}
      name={name}
      onClick={() => handleClick(name)}
      component={NavLink}
      to={`/${name}`}
      variant="outlined"
      className={
        isActiveButton === name
          ? `${classes.button} ${classes.isActiveButton}`
          : `${classes.button} ${classes.notActiveButton}`
      }
    >
      {name.replace(/_/g, " ")}
    </Button>
  ));

  return (
    <Box sx={{ boxShadow: 15 }}>
      <Card className={classes.root} style={{ zIndex: "1000" }}>
        <Grid
          container
          direction="row"
          justifycontent="center"
          alignItems="center"
          className={classes.wrap}
        >
          {ButtonRoute}
        </Grid>
      </Card>
    </Box>
  );
}
