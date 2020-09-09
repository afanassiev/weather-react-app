import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import Header from "./Components/Header";
import {apiKey, cityList} from "./utils/constants";
import { makeStyles } from '@material-ui/core/styles';
import CardLayout from "./Components/CardLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  city: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));



function App() {

  const classes = useStyles();

    return (
      <Grid
          container
          direction="column"
          justify="center"
          align-items="stretch"
        >
          <Grid item>
            <Header/>
          </Grid>
        <div className={classes.root}>
          <Grid
            container
            spacing={3}
          >
            <Grid item xs={12} sm={3}>
              <CardLayout
                className={classes.city}
                defaultCity="Paris"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardLayout
                className={classes.city}
                defaultCity="Seattle"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardLayout
                className={classes.city}
                defaultCity="Tokyo"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardLayout
                className={classes.city}
                defaultCity="Verkhoyansk"
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
    );
}

export default App;