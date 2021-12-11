import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
const useStyles = makeStyles((theme)=>({
    root: {
        backgroundColor: 'rgb(248, 248, 255, 0.4)', /* Black w/opacity/see-through */

        zIndex: 5,
        width: '9%',
        height:'200px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "25px",overflow: "hidden"
    },
  }));
const WeatherBox = ({day}) =>{
    const classes = useStyles();
return(
    <div className={classes.root} >
        <Typography align='center'>{day.day}</Typography>
        <div style={{marginTop: '30px'}} >
            {day.temp>25 ? <WbSunnyIcon fontSize='large' style={{color:'#FF8C00'}}/>:<CloudIcon  fontSize='large' color='primary' style={{color:'#ADD8E6'}}/>}
            <Typography>{day.temp}&deg;</Typography>
        </div>
    </div>
)
}

export default WeatherBox;