import './Navigation.scss';
import '../App.scss';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropDownMenuLrgScreen from '../components/DropdownMenuLrgScreen';
import DropDownMenuSmScreen from './DropDownMenuSmScreen';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import ReactAudioPlayer from 'react-audio-player';



export default function Navigation(props) {

    // Burger menu open/close
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState("");
    const [mute, setMuted] = useState(false)

    // nav dropdown close on outside click 
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

    // set language 
    let languageStoredInLocalStorage = localStorage.getItem("language");
    let [language, setLanguage] = useState(
      languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
    );

    function storeLanguageInLocalStorage(language) {
      localStorage.setItem("language", language);
      }


    let content = {
      english: {
        activity: "Activities",
        river: "Rivers",
        about: "About",
        booking: 'Booking',
        gallery: "Gallery",
        lang: "en",
        path: {
          canoe: 'canoe',
          tube: 'tube',
          shuttle: 'shuttle',
          booking: 'booking',
          about: 'about',
          security: 'security',
          politic: 'politic',
          gallery: 'gallery'
        }
      },
      french: {
        activity: "Activités",
        river: "Rivières",
        about: "À propos",
        booking: 'Réservation',
        gallery: "Galerie"
      }
    }
   
    props.language === "English" ? (content = content.english) : (content = content.french);

  return (

    <div ref={node}  className="navigation-bar" style={{backgroundColor:"black", position:"relative"}} >
    <div className="nav-big-screen" >
      <div className="logo-container">
        <Link to="/"><img className="logo" src="/images/logo.png" alt="ARS logo" /></Link>
      </div>
        <ul className="list-action" >
        <li className="nav-item-large">
            <div className="action-li" onClick={() => setMuted(!mute)} style={{transform:"scale(1.5)", marginTop:"0.5rem"}}>{mute ? <VolumeUpIcon /> : <VolumeOffIcon />}
            <ReactAudioPlayer
              src='forest-sounds.mp3'
              autoPlay
              muted={mute}
              loop
            />
            </div>
          </li>
          <li className="nav-item-large">
            <div className="action-li" onClick={() => openMenu('activities')}>{content.activity}<KeyboardArrowDownIcon /></div>
          </li>
          <li className="nav-item-large">
            <div className="action-li" onClick={() => openMenu('rivers')}>{content.river}<KeyboardArrowDownIcon /></div>
          </li>
          <li className="nav-item-large">
            <div className="action-li" onClick={() => openMenu('about')}>{content.about}<KeyboardArrowDownIcon /></div>
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
        <div className="language-select select-sml">
        <div className="volume" onClick={() => setMuted(!mute)} style={{color:"white", transform:"scale(1.5)", marginRight:"1rem"}}>{mute ? <VolumeUpIcon /> : <VolumeOffIcon />}
            <ReactAudioPlayer
              src='forest-sounds.mp3'
              autoPlay
              muted={mute}
              loop
            />
          </div>
                <select 
                  className="custom-select"
                  value={props.language}
                  onChange={e => props.handleSetLanguage(e.target.value)}>
                    <option value="English">En</option>
                    <option value="French">Fr</option>
                  </select>
              </div>
        <li className="nav-item select-sml">
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