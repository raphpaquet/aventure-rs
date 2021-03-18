import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import parse from "html-react-parser";
import './Rivieres.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    style={{width:"90vw"}}
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
    width: '70%',
    backgroundColor: 'transparent',
    transform: 'translate(20%)'
  },
}));

export default function ScrollableTabsRiver(props) {

  let content = {
    English: {
      labelFirst: "Rivière Noire",
      titleFirst: "Rivière Noire",
      activityDescriptionFirst: `<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
      labelSecond: "Rivière Coulonge",
      titleSecond: "Rivière Coulonge",
      activityDescriptionSecond: `<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
      labelThird: "Rivière Dumoine",
      titleThird: "Rivière Dumoine",
      activityDescriptionthird: `<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
      reserve: "More Info"
     },
    French: {
      labelFirst: "Rivière Noire",
      titleFirst: "Rivière Noire",
      activityDescriptionFirst: `<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
      labelSecond: "Rivière Coulonge",
      titleSecond: "Rivière Coulonge",
      activityDescriptionSecond: `<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
      labelThird: "Rivière Dumoine",
      titleThird: "Rivière Dumoine",
      activityDescriptionthird: ` <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
      reserve: "Plus d'info"
     }
  }

  props.language === "English" ? (content = content.English) : (content = content.French);
  
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
//className={classes.root}
  return (
    <div className='river-container'>
      <AppBar position="static" color="default" className="river-tab-container" >
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
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="riviere-container">
          <img className="riviere-img" src="/images/river.jpg" alt="" />
          <h3 className="riviere-summary">{content.titleFirst}</h3>
          <div className="riviere-text-container">
            {parse(content.activityDescriptionFirst)}
              </div>
            <button className="button reserve">{content.reserve}</button>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="riviere-container">
          <img className="riviere-img" src="/images/river.jpg" alt="" />
          <h3 className="riviere-summary">{content.titleSecond}</h3>
          <div className="riviere-text-container">
            {parse(content.activityDescriptionSecond)}
              </div>
            <button className="button reserve">{content.reserve}</button>
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="riviere-container">
          <img className="riviere-img" src="/images/river.jpg" alt="" />
          <h3 className="riviere-summary">{content.titleThird}</h3>
          <div className="riviere-text-container">
            {parse(content.activityDescriptionthird)}
              </div>
            <button className="button reserve river-btn" style={{marginTop:"2rem"}}>{content.reserve}</button>
          </div>
      </TabPanel>
    </div>
  );
}
