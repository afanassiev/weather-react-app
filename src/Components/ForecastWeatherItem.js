import React from "react";
import Icon from "./Icon";
import {ListItem, ListItemText, Typography} from "@material-ui/core";
import DateInfo from "./DateInfo";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  flexInfo: {
    flexDirection: "row",
    paddingLeft: '10px'
  },
    listItem: {
      fontSize: 3
    }
}
));

export default function ForecastWeatherItem(props) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start">
        <Icon
          code={props.data.weather[0].icon}
          />
          <div className={classes.flexInfo}>
            <DateInfo
              date={props.data.dt}
            />
            <ListItemText className={classes.listItem}>
              {Math.round(props.data.main.temp)}°C, feels like {Math.round(props.data.main.feels_like)}°C
            </ListItemText>
            {/*<ListItemText className={classes.listItem}>*/}
            {/*  Pressure: {props.data.main.pressure}*/}
            {/*</ListItemText>*/}
            <ListItemText className={classes.listItem}>
              Humidity: {props.data.main.humidity}%
            </ListItemText>
          </div>
    </ListItem>
  )
}