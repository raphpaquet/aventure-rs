import './Navbar.scss';
import { CSSTransition } from 'react-transition-group';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DropDownMenuLrgScreen(props) {


  const [activeMenu, setActiveMenu] = useState(props.goToMenu);
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
      canoe: "Canoe",
      tube: "Tube",
      bus: "Shuttle",
      noire: "River Noire",
      coulonge: "River Coulonge",
      company: "The Company",
      security: "Security",
      lang: 'en',
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
    French: {
      canoe: "Canot",
      tube: "Tube",
      bus: "Navette",
      noire: "Rivère Noire",
      coulonge: "Rivère Coulonge",
      company: "L'entreprise",
      security: "Securité",
      lang: 'fr',
        path: {
          canoe: 'canot',
          tube: 'tube',
          shuttle: 'navette',
          booking: 'réservation',
          about: 'àpropos',
          security: 'securité',
          politic: 'politiques',
          gallery: 'gallerie'
        }
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  function DropdownItem(props) {
    return ( 
      <div className="menu-item-2" >
        {/* <span className="icon-button">{props.leftIcon}</span> */}
        {props.children}
        {/* <span className="icon-right">{props.rightIcon}</span> */}
      </div>
    )
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>

      <CSSTransition
        in={activeMenu === 'activities'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu" >
          <DropdownItem >
            <Link to="/canoe" onClick={props.close}>{content.canoe}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/tube" onClick={props.close}>{content.tube}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/navette" onClick={props.close}>{content.bus}</Link>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'rivers'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>
            <Link to="/rivierenoire" onClick={props.close}>{content.noire}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/rivierecoulonge" onClick={props.close}>{content.coulonge}</Link>
            </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'about'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>
            <Link to="/about" onClick={props.close}>{content.company}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/securite" onClick={props.close}>{content.security}</Link>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}