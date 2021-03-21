import './Contact.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MapContainer from '../components/Map';
import { Helmet } from 'react-helmet';


export default function Contact(props) {

  const positionARS = {
    lat: 45.983288,
    lng: -76.833335
  }


  let content = {
    English: {
      seoTitle: "River Tubing",
      description: "inflated tubes location to do river floating in Outaouais",
      title: "Where to find us",
      address: "Address :",
      call: "Call Us:",
      email: "Email us:",
      follow: "Follow our adventures !",
      direction: "Itinerary"
    },
    French: {
      seoTitle: "Descente de rivière sur tube",
      description: "Location de tubes gonflables pour faire une descente de rivière",
      title: "Où nous trouver",
      address: "Adresse :",
      call: "Appelez-nous",
      email: "Écrivez-nous:",
      follow: "Suivez nos aventures !",
      direction: "Itinéraire"
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div id="contact">
      <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
          <link rel="canonical" href="https://aventure-riviere-sauvage.web.app/contact" />
        </Helmet>
      <div className="contact">
        <h2 className="title">{content.title}</h2>
        <div className="map">
          <div className="address">
            <h3>{content.address} </h3>
              <p>1111 rue de la Rivière Noire, <br></br>Pontiac, Quebec, H6fD4G</p>
            <a href="https://www.google.com/maps/dir//45.983288,-76.833335/@45.983288,-76.8355237,17z/data=!4m2!4m1!3e0" className="button" target="_blank">{content.direction}</a>
            <h4>{content.call}</h4>
              <p>514.555.5555</p>
            <h4>{content.email}</h4>
              <p><a href="mailto:paquetraphaelle@example.com">ars@gmail.com</a></p>
          </div>
          <div className="map-container">
            <MapContainer 
              position={positionARS}
            />
          </div>
        </div>
        <div className="follow">
          <h2 className="title">{content.follow}</h2>
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