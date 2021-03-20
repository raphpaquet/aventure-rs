import './Navbar.scss';
import DropDownMenuSmScreen from './DropDownMenuSmScreen';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar(props) {


  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <div className="icon-button" onClick={() => setOpen(!open)}><MenuIcon /></div>
        </li>
          {open && <DropDownMenuSmScreen />}
      </ul>
    </nav>
  )
}

