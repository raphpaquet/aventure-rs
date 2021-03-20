import './Footer.scss';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer(props) {

  let content = {
    English: {
      adress: "Where to find us",
      links: "Practical links",
      link1: "Terms & Conditions",
      link2: "Sales policies",
      link3: "Security & responsabilities",
      link4: "River Maps",
    },
    French: {
      adress: "Où nous trouver",
      links: "Liens pratiques",
      link1: "Termes et conditions",
      link2: "Politique d'achats",
      link3: "Sécurité et responsabilités",
      link4: "Cartes des rivières",
    }
  }

  console.log(props.language)
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col col-3">
          <h5>{content.adress}</h5>
          <p>112 Avenue des Sources, Pontiac, Quebec, H7F2H6, Canada</p>
        </div>
        <div className="col col-3">
          <h5>{content.links}</h5>
          <Link to="" className="footer-link">{content.link1}</Link>
          <Link to="" className="footer-link">{content.link2}</Link>
          <Link to="" className="footer-link">{content.link3}</Link>
          <a href="http://www.cartespleinair.org/Canot/cartes.html" target="_blank" className="footer-link">{content.link4}</a>
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
        <div className="footer-text">@ 2021 ARS-Pontiac | All Rights Reserved.</div>
      </div>
    </div>
  </footer>
  )
}
