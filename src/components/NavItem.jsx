import './Navbar.scss';
import { useState } from 'react';
import DropDownMenu2 from './DropDownMenu2'

export default function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="/#" className="icon-button" onClick={() => setOpen(!open)}>contact</a>
      <div className="icon-button" onClick={() => setOpen(!open)}>Activity<DropDownMenu2></DropDownMenu2></div>
      <div className="icon-button" onClick={() => setOpen(!open)}>About<DropDownMenu2></DropDownMenu2></div>
      <a href="/#" className="icon-button" onClick={() => setOpen(!open)}>Reservation</a>
      {open }
    </li>
  )
}