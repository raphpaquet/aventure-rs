import './Navbar.scss';
import { useState } from 'react';
import DropDownMenuSmScreen from './DropDownMenuSmScreen'

export default function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="/#" className="icon-button" onClick={() => setOpen(!open)}>contact</a>
      <div className="icon-button" onClick={() => setOpen(!open)}>Activity<DropDownMenuSmScreen></DropDownMenuSmScreen></div>
      <div className="icon-button" onClick={() => setOpen(!open)}>About<DropDownMenuSmScreen></DropDownMenuSmScreen></div>
      <a href="/#" className="icon-button" onClick={() => setOpen(!open)}>Reservation</a>
      {open }
    </li>
  )
}