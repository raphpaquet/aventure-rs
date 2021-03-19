import './Navbar.scss';
import { CSSTransition } from 'react-transition-group';
import { useState, useRef, useEffect } from 'react';

export default function DropDownMenu2() {


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
          >Activities</DropdownItem>
          <DropdownItem
            leftIcon="😀"
            rightIcon="🙂"
            goToMenu="about">
            About
          </DropdownItem>
          <DropdownItem
            leftIcon="🚣" 
            goToMenu="rivers">
            Rivers
          </DropdownItem>
          <DropdownItem
            leftIcon="📆">
            Booking
          </DropdownItem>
          <DropdownItem
            leftIcon="☎️">
            Contact
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
          <DropdownItem goToMenu="main" leftIcon="◀️">
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🚣" >Canoe</DropdownItem>
          <DropdownItem leftIcon="🐳">Tube</DropdownItem>
          <DropdownItem leftIcon="🚌">Shuttle</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'about'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="◀️">
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon="😈">The company</DropdownItem>
          <DropdownItem leftIcon="😈">Security</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'rivers'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="◀️">
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon="😈">River Noire</DropdownItem>
          <DropdownItem leftIcon="😈">River Coulonge</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}