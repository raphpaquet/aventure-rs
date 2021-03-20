import './Navigation.scss';
import '../App.scss';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropDownMenuLrgScreen from '../components/DropdownMenuLrgScreen';
import DropDownMenuSmScreen from './DropDownMenuSmScreen';
import MenuIcon from '@material-ui/icons/Menu';



export default function Navigation(props) {

    // Burger menu open/close
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState("");

    const node = useRef();

    const handleClickOutside = e => {
      console.log("clicking anywhere");
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setOpen(false);
    };
  
    useEffect(() => {
      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [open]);
  
    const openMenu = (menuName) => {
      setOpen(!open);
      setMenu(menuName)
    }

    const closeMenu = () => {
      setOpen(false)
    }

    let languageStoredInLocalStorage = localStorage.getItem("language");
    let [language, setLanguage] = useState(
      languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
    );

    function storeLanguageInLocalStorage(language) {
      localStorage.setItem("language", language);
      }


    let content = {
      English: {
        activity: "Activities",
        river: "Rivers",
        about: "About",
        booking: 'Booking',
        gallery: "Gallery"
      },
      French: {
        activity: "Activités",
        river: "Rivières",
        about: "À propos",
        booking: 'Réservation',
        gallery: "Galerie"
      }
    }
   
    props.language === "English" ? (content = content.English) : (content = content.French);

  return (

    <div ref={node}  className="navigation-bar" style={{backgroundColor:"black", position:"relative"}} >
    <div className="nav-big-screen" >
      <div className="logo-container">
        <Link to="/"><img className="logo" src="/images/logo.png" alt="ARS logo" /></Link>
      </div>
        <ul className="list-action" >
          <li className="nav-item-large">
            <div className="action-li" onClick={() => openMenu('activities')}>{content.activity}</div>
          </li>
          <li className="nav-item-large">
            <div className="action-li" onClick={() => openMenu('rivers')}>{content.river}</div>
          </li>
          <li className="nav-item-large">
            <div className="action-li" onClick={() => openMenu('about')}>{content.about}</div>
          </li>
          {open && <DropDownMenuLrgScreen language={props.language} goToMenu={menu} close={() => closeMenu()}/>}
          <Link to="/reservations"><li className="action-li" onClick={() => closeMenu()}>{content.booking}</li></Link>
          <Link to="/gallery"><li className="action-li" onClick={() => closeMenu()}>{content.gallery}</li></Link>
          <Link to="/contact"><li className="action-li" onClick={() => closeMenu()}>Contact</li></Link>
          <div className="language-select">
              <select 
                className="custom-select"
                value={props.language}
                onChange={e => props.handleSetLanguage(e.target.value)}>
                  <option value="English">En</option>
                  <option value="French">Fr</option>
                </select>
            </div>
        </ul>
      </div>
      <div id="nav-small-screen">
        <Link to="/"><img className="logo-small-screen" src="/images/logo.png" alt="ARS logo" /></Link>
        <li className="nav-item">
        <div className="icon-button burger" onClick={() => setOpen(!open)}><MenuIcon /></div>
        </li>
        {open && 
        <DropDownMenuSmScreen 
          language={language}
          handleSetLanguage={language => {
            setLanguage(language);
            storeLanguageInLocalStorage(language)
          }}
          goToMenu={menu}  
          close={() => closeMenu()}/>}
      </div>
    </div>
  )
}