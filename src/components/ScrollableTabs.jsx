import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import parse from "html-react-parser";
import '../screens/Canoe.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1.5rem",
    flexGrow: 1,
    alignItems: "center",
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {

  let content = {
    English: {
      labelFirst: "2 days",
      titleFirst: "Canoe Camping 2 days adventure",
      activityDescriptionFirst: `<p className='activity-text'> Length : 2 days </p><p className='activity-text'>Difficulty: beginner/easy</p>
      <p className='activity-text'>Price: starting at 50$</p><p className='activity-text'>Inclusions: Canoe & Shuttle to departure point </p>`,
      labelSecond: "3 days",
      titleSecond: "Canoe Camping 3 days adventure",
      activityDescriptionSecond: `<p className='activity-text'> Length : 2 days </p><p className='activity-text'>Difficulty: beginner/easy</p>
      <p className='activity-text'>Price: starting at 50$</p><p className='activity-text'>Inclusions: Canoe & Shuttle to departure point </p>`,
      labelThird: "4 days",
      titleThird: "Canoe Camping 4 days adventure",
      activityDescriptionthird: `<p className='activity-text'> Length : 2 days </p><p className='activity-text'>Difficulty: beginner/easy</p>
      <p className='activity-text'>Price: starting at 50$</p><p className='activity-text'>Inclusions: Canoe & Shuttle to departure point </p>`,
      labelFourth: "6 days",
      titleFourth: "Canoe Camping 6 days adventure",
      activityDescriptionFourth: `<p className='activity-text'> Length : 2 days </p><p className='activity-text'>Difficulty: beginner/easy</p>
      <p className='activity-text'>Price: starting at 50$</p><p className='activity-text'>Inclusions: Canoe & Shuttle to departure point </p>`,
      reserve: "Book online"
     },
    French: {
      labelFirst: "2 jours",
      titleFirst: "Aventure de Canot Camping 2 jours",
      activityDescriptionFirst: `<p className='activity-text'> Durée : 2 jours </p><p className='activity-text'>Difficulté: débutant/facile</p>
      <p className='activity-text'>Prix: À partir de 50$/jour</p><p className='activity-text'>Inclusions: Canot & Navette jusqu'au point de départ </p>`,
      labelSecond: "3 jours",
      titleSecond: "Aventure de Canot Camping 3 jours",
      activityDescriptionSecond: `<p className='activity-text'> Durée : 2 jours </p><p className='activity-text'>Difficulté: débutant/facile</p>
      <p className='activity-text'>Prix: À partir de 50$/jour</p><p className='activity-text'>Inclusions: Canot & Navette jusqu'au point de départ </p>`,
      labelThird: "4 jours",
      titleThird: "Aventure de Canot Camping 4 jours",
      activityDescriptionthird: `<p className='activity-text'> Durée : 2 jours </p><p className='activity-text'>Difficulté: débutant/facile</p>
      <p className='activity-text'>Prix: À partir de 50$/jour</p><p className='activity-text'>Inclusions: Canot & Navette jusqu'au point de départ </p>`,
      labelFourth: "6 jours",
      titleFourth: "Aventure de Canot Camping 6 jours",
      activityDescriptionFourth: `<p className='activity-text'> Durée : 2 jours </p><p className='activity-text'>Difficulté: débutant/facile</p>
      <p className='activity-text'>Prix: À partir de 50$/jour</p><p className='activity-text'>Inclusions: Canot & Navette jusqu'au point de départ </p>`,
      reserve: "Réserver"
     }
  }

  props.language === "English" ? (content = content.English) : (content = content.French);
  
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor={"#f8c740"}
          textColor={"#f8c740"}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label={content.labelFirst} {...a11yProps(0)} style={{fontSize:"1.5rem", fontFamily:"'Open Sans', sans-serif"}}/>
          <Tab label={content.labelSecond}{...a11yProps(1)} style={{fontSize:"1.5rem", fontFamily:"'Open Sans', sans-serif"}}/>
          <Tab label={content.labelThird}{...a11yProps(2)} style={{fontSize:"1.5rem", fontFamily:"'Open Sans', sans-serif"}}/>
          <Tab label={content.labelFourth} {...a11yProps(3)} style={{fontSize:"1.5rem", fontFamily:"'Open Sans', sans-serif"}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2 className="activity-summary">{content.titleFirst}</h2>
        <div className="activity-container">
          <img className="activity-img" src="/images/map.png" alt="" />
          <div className="activity-text-container">
            {parse(content.activityDescriptionFirst)}
              </div>
            <button className="button reserve">{content.reserve}</button>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h2 className="activity-summary">{content.titleSecond}</h2>
        <div className="activity-container">
          <img className="activity-img" src="/images/map.png" alt="" />
          <div className="activity-text-container">
            {parse(content.activityDescriptionSecond)}
              </div>
            <button className="button reserve">{content.reserve}</button>
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h2 className="activity-summary">{content.titleThird}</h2>
        <div className="activity-container">
          <img className="activity-img" src="/images/map.png" alt="" />
          <div className="activity-text-container">
            {parse(content.activityDescriptionthird)}
              </div>
            <button className="button reserve">{content.reserve}</button>
          </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h2 className="activity-summary">{content.titleFourth}</h2>
        <div className="activity-container">
          <img className="activity-img" src="/images/map.png" alt="" />
          <div className="activity-text-container">
            {parse(content.activityDescriptionFourth)}
              </div>
            <button className="button reserve">{content.reserve}</button>
          </div>
      </TabPanel>
    </div>
  );
}
