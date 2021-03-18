import './Contact.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MapContainer from '../components/Map';
import { Helmet } from 'react-helmet';


export default function Contact(props) {


  let content = {
    English: {
      seoTitle: "River Tubing",
      description: "inflated tubes location to do river floating in Outaouais"
    },
    French: {
      seoTitle: "Descente de rivière sur tube",
      description: "Location de tubes gonflables pour faire une descente de rivière"
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div id="contact">
      <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
        </Helmet>
      <div className="contact">
        <h2 className="title">Où nous trouver</h2>
        <div className="map">
          <div className="address">
            <h3>Addresse: </h3>
              <p>1111 rue de la Rivière Noire, <br></br>Pontiac, Quebec, H6fD4G</p>
            <h4>Appelez-nous: </h4>
              <p>514.555.5555</p>
            <h4>Écrivez-nous: </h4>
              <p><a href="mailto:paquetraphaelle@example.com">ars@gmail.com</a></p>
          </div>
          <MapContainer />
        </div>
        <div className="follow">
          <h2 className="title">Suivez nos aventures !</h2>
          <div className="icon-social">
            <InstagramIcon className="icon"/>
            <FacebookIcon className="icon"/>
          </div>
          <img src="/images/instagram-photo.jpg" className="ig-img" alt="apercu d'un profil instagram"/>
        </div>
      </div>
    </div>
  )
}