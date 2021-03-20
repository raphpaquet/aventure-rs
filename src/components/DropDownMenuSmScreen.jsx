import './Navbar.scss';
import { CSSTransition } from 'react-transition-group';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


export default function DropDownMenuSmScreen(props) {


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
            goToMenu="activities">
            {content.activity}
          <ArrowRightIcon className="arrow-right" />
          </DropdownItem>
          <DropdownItem
            goToMenu="about">
            {content.about}
            <ArrowRightIcon className="arrow-right" />
          </DropdownItem>
          <DropdownItem
            goToMenu="rivers">
            {content.rivers}
            <ArrowRightIcon className="arrow-right" />
          </DropdownItem>
          <DropdownItem>
            <Link to="/reservation" onClick={props.close}>{content.booking}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/contact" onClick={props.close}>Contact</Link>
          </DropdownItem>
          <DropdownItem>
            <div className="language-select">
                <select 
                  className="custom-select"
                  value={props.language}
                  onChange={e => props.handleSetLanguage(e.target.value)}>
                    <option value="English">En</option>
                    <option value="French">Fr</option>
                  </select>
              </div>
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
          <DropdownItem><Link to="/canoe" onClick={props.close}>{content.canoe}</Link></DropdownItem>
          <DropdownItem><Link to="/tube" onClick={props.close}>{content.tube}</Link></DropdownItem>
          <DropdownItem><Link to="/navette" onClick={props.close}>{content.bus}</Link></DropdownItem>
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
          <DropdownItem><Link to="/about" onClick={props.close}>{content.company}</Link></DropdownItem>
          <DropdownItem><Link to="/securite" onClick={props.close}>{content.security}</Link></DropdownItem>
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
          <DropdownItem><Link to="/rivierenoire" onClick={props.close}>{content.noire}</Link></DropdownItem>
          <DropdownItem><Link to="/rivierecoulonge" onClick={props.close}>{content.coulonge}</Link></DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}