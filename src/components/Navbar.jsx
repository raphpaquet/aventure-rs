import './Navbar.scss';
import DropDownMenu2 from './DropDownMenu2';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar(props) {


  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
            <div className="language-select" style={{marginRight:"4rem"}}>
              <select 
                className="custom-select"
                value={props.language}
                onChange={e => props.handleSetLanguage(e.target.value)}>
                  <option value="English">English</option>
                  <option value="French">Français</option>
                </select>
            </div>
        </li>
        {/* <li className="nav-item">
          <a href="/#" className="icon-button" onClick={() => setOpen(!open)}>contact</a>
        </li>
        <li className="nav-item">
          <div className="icon-button" onClick={() => setOpen(!open)}>Activity<DropDownMenu2></DropDownMenu2></div>
        </li> */}
        <li className="nav-item">
          <div className="icon-button" onClick={() => setOpen(!open)}><MenuIcon /></div>
        </li>
        {/* <li className="nav-item">
          <a href="/#" className="icon-button" onClick={() => setOpen(!open)}>Reservation</a>
        </li> */}
          {open && <DropDownMenu2 />}
      </ul>
    </nav>
  )
}

