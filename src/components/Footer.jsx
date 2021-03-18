import './Footer.scss';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {

  return (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col col-3">
          <h5>Où nous trouver</h5>
          <p>112 Avenue des Sources, Pontiac, Quebec, H7F2H6, Canada</p>
        </div>
        <div className="col col-3">
          <h5>Liens pratiques</h5>
          <Link to="" className="footer-link">Termes et conditions</Link>
          <Link to="" className="footer-link">Politique d'achats</Link>
          <Link to="" className="footer-link">Sécurité et responsabilités</Link>
          <Link to="" className="footer-link">Cartes des rivières</Link>
        </div>
        <div className="col col-3">
          <h5>Social</h5>
          <div className="footer-link-wrapper"><InstagramIcon className="info-icon" />
            <Link to="" className="footer-link with-icon">Instagram</Link>
          </div>
          <div className="footer-link-wrapper"><FacebookIcon className="info-icon" />
            <Link to="" className="footer-link with-icon">Facebook</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="center">
      <div className="w-container">
        <div className="footer-text">@ 2021 Raphaëlle Paquet | All Rights Reserved.</div>
      </div>
    </div>
  </footer>
  )
}
