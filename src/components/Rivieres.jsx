import {Tab, Tabs} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 
export default function Rivieres(props) {

  const [key, setKey] = useState('noire');


  let content = {
    English: {
      title: "the Rivers",
      subtitle: "Here's the 3 navigable rivers of Pontiac",
      noire: "Rivière Noire",
      noireDescription: "",
      info: "More info",
      mauve: "Rivière Mauve",
      mauveDescription: "",
      orange: "Rivière Orange",
      orangeDescription: ""
    },
    French: {
      title: "Les Rivières",
      subtitle: "Voici les 3 rivières naviguables de la région.",
      noire: "Rivière Noire",
      noireDescription: "",
      info: "Plus d'info",
      mauve: "Rivière Mauve",
      mauveDescription: "",
      orange: "Rivière Orange",
      orangeDescription: ""
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div className="section accent">
      <div className="container">
        <div className="section-title-group">
          <h2 className="section-heading centered">{content.title}</h2>
          <div className="section-subheading centered">{content.subtitle}</div>
          <div data-duration-in="300" data-duration-out="100" className="tabs-wrapper tabs">
            <Tabs 
              activeKey={key} 
              onSelect={(k) => setKey(k)} 
              id="tab-menu" 
              className="tabs-links">
              <Tab eventKey="noire" title="Rivière Noire" >
                <div><img src="./images/map.png" alt="rivière noire" className="fullwidth-image"/>
                  <h3>{content.noire}</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <Link to="/rivierenoire"><button className="button plus">{content.info}</button></Link>
                </div>
              </Tab>
              <Tab eventKey="orange" title="Rivière Orange">
                <div><img src="./images/stretch.jpg" alt="riviere orange" className="fullwidth-image"/>
                  <h3>{content.orange}</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <Link to="/riviereorange"><button className="button plus">{content.info}</button></Link>
                </div>
              </Tab>
              <Tab eventKey="mauve" title="Rivière Mauve">
                <div><img src="./images/map.png" alt="riviere mauve" className="fullwidth-image"/>
                  <h3>{content.mauve}</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <Link to="/rivieremauve"><button className="button plus">{content.info}</button></Link>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}