import './Navbar.scss';
import { CSSTransition } from 'react-transition-group';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';


export default function DropDownMenu2(props) {


  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  let content = {
    English: {
      activity: "Activities",
      about: "About",
      rivers: "Rivers",
      canoe: "Canoe",
      tube: "Tube",
      bus: "Shuttle",
      noire: "River Noire",
      coulonge: "River Coulonge",
      company: "The Company",
      security: "Security",
      booking: "Booking",
      back : "Back"
    },
    French: {
      activity: "Activités",
      about: "À propos",
      rivers: "Rivières",
      canoe: "Canot",
      tube: "Tube",
      bus: "Navette",
      noire: "Rivère Noire",
      coulonge: "Rivère Coulonge",
      company: "L'entreprise",
      security: "Securité",
      booking: "Réservation",
      back: "retour"
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);


  function DropdownItem(props) {
    return ( 
      <a href="#" className="menu-item-2" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            goToMenu="activities"
          >{content.activity}</DropdownItem>
          <DropdownItem
            goToMenu="about">
            {content.about}
          </DropdownItem>
          <DropdownItem
            goToMenu="rivers">
           {content.rivers}
          </DropdownItem>
          <DropdownItem>
            <Link to="/reservation">{content.booking}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/contact">Contact</Link>
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'activities'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main">
            <ArrowLeftIcon className="arrow-down" /><h2>{content.back}</h2>
          </DropdownItem>
          <DropdownItem>{content.canoe}</DropdownItem>
          <DropdownItem>{content.tube}</DropdownItem>
          <DropdownItem>{content.bus}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'about'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main">
          <ArrowLeftIcon className="arrow-down" /><h2>{content.back}</h2>
          </DropdownItem>
          <DropdownItem>{content.company}</DropdownItem>
          <DropdownItem>{content.security}</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'rivers'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main">
          <ArrowLeftIcon className="arrow-down" /><h2>{content.back}</h2>
          </DropdownItem>
          <DropdownItem>{content.noire}</DropdownItem>
          <DropdownItem>{content.coulonge}</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}