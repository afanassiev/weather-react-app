import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ForecastWeatherItem from "./ForecastWeatherItem";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {apiKey} from "../utils/constants";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
 modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
   overflow: 'scroll'
 },
 paper: {
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
 },
 root: {
  width: '100%',
  maxWidth: '36ch',
  backgroundColor: theme.palette.background.paper,
 },
 inline: {
  display: 'inline',
 },
 color: {
  color: "#673ab7"
 }
}));

export default function ForecastWeather(props) {
 const classes = useStyles();
 const [forecastData, setForecastData] = useState(false);
 const [loaded, setLoaded] = useState(false);

 function getApiForecast(response) {
  setForecastData(response.data);
  setLoaded(true);
 }

 if (loaded && props.city === forecastData.city.name) {
 return (
   <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.isOpen}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
       timeout: 500,
      }}
    >
     <Fade in={props.isOpen}>
      <div className={classes.paper}>
       <h2 id="transition-modal-title">Forecast for {props.city}</h2>
       <List className={classes.root}>
         <ForecastWeatherItem data={forecastData.list[0]}/>
         <Divider variant="inset" component="li" />
         <ForecastWeatherItem data={forecastData.list[1]}/>
         <Divider variant="inset" component="li" />
         <ForecastWeatherItem data={forecastData.list[2]}/>
         <Divider variant="inset" component="li" />
         <ForecastWeatherItem data={forecastData.list[3]}/>
         <Divider variant="inset" component="li" />
         <ForecastWeatherItem data={forecastData.list[4]}/>
       </List>
      </div>
     </Fade>
    </Modal>
    </div>
 );
 } else {
  let api = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(api).then(getApiForecast);
  return null;
 }
}