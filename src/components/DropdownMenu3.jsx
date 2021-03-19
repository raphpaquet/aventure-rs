import './Navbar.scss';
import { CSSTransition } from 'react-transition-group';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DropDownMenu3(props) {


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
      security: "Security"
    },
    French: {
      canoe: "Canot",
      tube: "Tube",
      bus: "Navette",
      noire: "Rivère Noire",
      coulonge: "Rivère Coulonge",
      company: "L'entreprise",
      security: "Securité"
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
        <div className="menu">
          <DropdownItem>
            <Link to="/canoe">{content.canoe}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/tube">{content.tube}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/navette">{content.bus}</Link>
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
            <Link to="/rivierenoire">{content.noire}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/rivierecoulonge">{content.coulonge}</Link>
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
            <Link to="/about">{content.company}</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/securite">{content.security}</Link>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}