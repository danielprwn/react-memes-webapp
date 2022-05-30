import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: "1rem",
    color: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },

  menuButton: {
    marginLeft: "auto",
    color: theme.palette.primary.dark,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const StyledMenu = withStyles((theme) => ({
  paper: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      border: "2px solid #d3d4d5",
      width: "200px",
    },
  },
}))((props) => (
  <Menu
    elevation={3}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.dark,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.primary.light,
      },
    },
  },
}))(MenuItem);

const Headline = () => {
  const classes = useStyles();
  const buttons = ["hot", "regular", "generate_meme", "best_memes"];
  const [markElement, setMarkelement] = useState(null);

  const handleClick = (event) => {
    setMarkelement(event.currentTarget);
  };

  const handleClose = () => {
    setMarkelement(null);
  };

  const MenuItem = buttons.map((name) => (
    <StyledMenuItem key={name} button={true} component={Link} to={`/${name}`}>
      <ListItemText primary={name.toUpperCase().replace(/_/g, " ")} />
    </StyledMenuItem>
  ));

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title} variant="h3">
          Best Memes Website! 😄
        </Typography>
        <IconButton
          edge="end"
          className={classes.menuButton}
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <StyledMenu
          id="menu-bar"
          anchorEl={markElement}
          keepMounted
          open={Boolean(markElement)}
          onClose={handleClose}
        >
          {MenuItem}
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
};

export default Headline;
