import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Date from "./DateInfo";
import {ListItem} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CurrentWeather(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
        {/*<Typography className={classes.title} color="textSecondary" gutterBottom>*/}
        {/*  Date*/}
        {/*</Typography>*/}
        <Typography variant="h5" component="h2">
          {props.data.city}
        </Typography>
        {/*<Date*/}
        {/*  date={props.data.date}*/}
        {/*/>*/}
        <Typography variant="h4" component="h4">
          {Math.round(props.data.temp)} °C
          <Typography className={classes.pos} color="textSecondary">
            {props.data.description}
          </Typography>
          <br />

        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          type="button"
          onClick={props.onForecastWeather}
        >Press to View Forecast</Button>
      </CardActions>
    </Card>
  )
}