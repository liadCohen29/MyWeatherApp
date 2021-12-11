import WeatherBox from "./WeatherBox";
import {FormControl ,Typography } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from "react";
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

const WeekWeatherView = ()=>{
    const weather=[{day:'Sunday',temp:'38'},{day:'Monday',temp:'29'},{day:'Tuesday',temp:'21'},{day:'Wednesday',temp:'17'},{day:'Thursday',temp:'23'},{day:'Friday',temp:'26'},{day:'Saturday',temp:'26'},]
    const classes = useStyles();
    const [values, setValues] = React.useState('');
    const handleChange =(value)=>{
        setValues(value);
    }

return(
    <div> 
        <div  style={{position:'absolute',width:'80%',top:'10%', left:'10%'}}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                <InputLabel >Search City</InputLabel>
                <FilledInput
                    value={values}
                    onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                    }
                    />
            </FormControl>
        </div>
        <div style={{display: 'flex', position: "absolute",top: "20%",
            justifyContent: 'space-between', width:'80%', left:'10%'}}>       
            <Typography variant='h6'  style={{color:'grey'}}>Tel Aviv</Typography>
            <div style={{display:'flex'}}>
                <Checkbox icon={<FavoriteBorder fontSize='large'/>} checkedIcon={<Favorite fontSize='large'/>} style={{top:'-20%'}}/>
                <Typography variant='h6' style={{color:'grey'}}>Add To Favorite</Typography>
            </div>
        </div>
        <div style={{display: 'flex', position: "absolute",top: "40%",left:'10%',
            justifyContent: 'space-between', width:'80%',gap:2}}>
            { weather.map((day)=>
                <WeatherBox day={day}/>
            )}
        </div>
    </div>
    )
};

export default WeekWeatherView;