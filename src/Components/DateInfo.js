import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import {ListItem} from "@material-ui/core";

export default function DateInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  // let day = days[props.date.getDay()];

  let day = props.date;
  let weekDay = new Date(day * 1000)
  let weekDayName = days[weekDay.getDay()]


  let hours = weekDay.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = weekDay.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

    return (
      <div>
        <Typography>
          {weekDayName}, {hours}:{minutes}
        </Typography>
      </div>
    );
}