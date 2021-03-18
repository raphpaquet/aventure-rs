import './Menu.scss';
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

export default function Menu({ open, ref }) {

  const closeMenu = () => {
      document.querySelector('.style-menu').classList.remove('transform-open');
  };


  return (
    <div className="style-menu" open={open} onClick={closeMenu}>
        <ul className="burger-list-action">
          <Link to="/"><li className="burger-action-li">Activités</li></Link>
        <DropDownMenu 
          
          title={"Les Activités"} 
          first={"Canot"} 
          firstLink={'/canoe'} 
          second={"Tubes"} 
          secondLink={"/tube"} 
          third={"Navette"} 
          thirdLink={"/navette"}
        />
        <Link to="/reservations"><li className="burger-action-li">Réservations</li></Link>
        <Link to="/about"><li className="burger-action-li">À propos</li></Link>
        <li className="burger-action-li">
        <DropDownMenu 
          title={"À propos"} 
          first={"Notre Mission"} 
          firstLink={'/mission'} 
          second={"La région"} 
          secondLink={"/region"} 
          third={"Sécurité"} 
          thirdLink={"/securite"}
          fourth={"le site"}
          fourthLink={"/site"}
        /></li>
        <Link to="/contact"><li className="burger-action-li">Contact</li></Link>
      </ul>
    </div>
  )
}
