import React from "react";
import {AppBar, Box, Container, Grid, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#000"
  },
  toolbar: {
    minHeight: 70
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  surmonte: {
    fontSize: "27px",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.06em"
  },
  nocumple: {
    fontSize: "27px",
    fontFamily: "'Baloo Tammudu 2', cursive",
    letterSpacing: "0.06em"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Container>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" color="inherit" className={classes.surmonte}>
                <b>SUR</b>MONTE
              </Typography>
            </Grid>
            <Grid item>
              <Box pt={1} pr={2}>
                <Typography variant="h6" color="inherit" className={classes.nocumple}>
                  <b>no</b>cumple.cl
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
