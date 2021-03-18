import './Navigation.scss';
import '../App.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import Burger from '../components/Burger';
import Menu from '../components/Menu';



export default function Navigation(props) {

    // Burger menu open/close
    const [open, setOpen] = useState(false);

  

    let content = {
      English: {
        titleActivity: "Activities",
        firstActivity: "Canoe",
        secondActivity: "Tubing",
        thirdActivity: "Shuttle",
        titleRiver: "The Rivers",
        firstRiver: "Noire River",
        secondRiver: "Coulonge River",
        thirdRiver: "Dumoine River",
        firstAbout: "The Company",
        titleAbout: "About",
        secondAbout: "Security",
        gallery: "Gallery",
        booking: "Booking"
      },
      French: {
        titleActivity: "Les activités",
        firstActivity: "Canot",
        secondActivity: "Tube",
        thirdActivity: "Navette",
        titleRiver: "Les Rivières",
        firstRiver: "Rivière Noire",
        secondRiver: "Rivière Coulonge",
        thirdRiver: "Rivière Dumoine",
        firstAbout: "L'entreprise",
        titleAbout: "À propos",
        secondAbout: "Sécurité",
        gallery: "Galerie",
        booking: "Réservations"
      }
    }
   
    props.language === "English" ? (content = content.English) : (content = content.French);

  return (

    <div className="navigation-bar" style={{backgroundColor:"black", position:"relative"}}>
    <div className="nav-big-screen">
      <div className="logo-container">
        <Link to="/"><img className="logo" src="/images/logo.png" alt="ARS logo" /></Link>
      </div>
        <ul className="list-action">
          <DropDownMenu 
            title={content.titleActivity}
            first={content.firstActivity} 
            firstLink={'/canoe'} 
            second={content.secondActivity} 
            secondLink={"/tube"} 
            third={content.thirdActivity} 
            thirdLink={"/navette"}
          />
            <DropDownMenu 
              bgColor={'black'}
              title={content.titleRiver} 
              first={content.firstRiver} 
              firstLink={'/rivierenoire'} 
              second={content.secondRiver} 
              secondLink={"/rivierecoulonge"}
              third={content.thirdRiver}
              thirdLink={"/rivieredumoine"}
            />
          <DropDownMenu 
            title={content.titleAbout} 
            first={content.firstAbout} 
            firstLink={'/about'} 
            second={content.secondAbout} 
            secondLink={"/securite"}
          />
          <Link to="/reservations"><li className="action-li" >{content.booking}</li></Link>
          <Link to="/gallery"><li className="action-li" >{content.gallery}</li></Link>
          <Link to="/contact"><li className="action-li">Contact</li></Link>
          <div className="language-select">
              <select 
                className="custom-select"
                value={props.language}
                onChange={e => props.handleSetLanguage(e.target.value)}>
                  <option value="English">English</option>
                  <option value="French">Français</option>
                </select>
            </div>
        </ul>
      </div>
      <div id="nav-small-screen">
      <div className="logo-container">
        <Link to="/"><img className="logo" src="/images/logo.png" alt="ARS logo" /></Link>
      </div>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}  ref={props.ref}/>
      </div>
    </div>
  )
}