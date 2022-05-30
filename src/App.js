import { BrowserRouter as Router } from "react-router-dom";
import Headline from "./components/Headline";
import Menu from "./components/Menu";
import Routes from "./components/Routes";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#eff4dc",
      main: "#3c0f72",
      dark: "#100046",
    },
    secondary: {
      main: "#d32f2f",
      light: "#e57373",
    },
    text: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.root} style={{ minHeight: "100vh" }}>
          <Headline />
          <main>
            <Grid container justify="center">
              <Grid item xs={8} md={12}>
                <Menu/>
              </Grid>
              <Grid item xs={12} md={8}>
                <Routes />
              </Grid>
            </Grid>
          </main>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}
