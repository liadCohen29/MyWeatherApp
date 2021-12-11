import background from '../Assets/Images/background.jpg'
import { Typography} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import WeekWeatherView from './WeekWeatherView';
import FavoritePage from './FavoritePage';
const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
  })(Tabs);
  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      width: 40,
      fontWeight: theme.typography.fontWeightRegular,
     
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);
const MainPage =()=>{

    const [tabValue, setValue] = useState('one');
    const handleChange = (event,newValue) => {   
        setValue(newValue);
    };


    return(
        <div>
            <img src={background} alt={'background'} class="img-responsive" style={{width: '99%', height: "99vh", overflow: "hidden", filter:'blur(6px)'}}/>
            <div style={{position: "absolute", top: "1%", left: '1%',right:'1%',display: 'flex',
                justifyContent: 'space-between', width:'99%'}}>
            <Typography variant='h4' style={{paddingTop:'10px',color:'grey'}} >Herolo Weather App</Typography>
                <AntTabs value={tabValue} onChange={handleChange} indicatorColor='primary'>
                    <AntTab label="Home" value='one'/>
                    <AntTab label="Favorites" value='two' />
                </AntTabs>
            </div>
            {tabValue==='one'? <WeekWeatherView/> : <FavoritePage/>}  

        </div>
    )
}

export default MainPage;