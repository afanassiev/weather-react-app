import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
 iconStyles: {
    flex: 1
 }
}))

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <CloudIcon className={classes.iconStyles}/>
        <WbSunnyIcon  className={classes.iconStyles}/>
        <AcUnitIcon className={classes.iconStyles}/>
      </Toolbar>
    </AppBar>
  )
}

export default Header;