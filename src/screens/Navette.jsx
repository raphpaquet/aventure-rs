import './Canoe.scss';
import ArrowDown from '../components/ArrowDown';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';



export default function Canoe(props) {


 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' })
 }; 

 let content = {
  English: {
    seoTitle: "Shuttle service for canoe transportation | Pontiac, Outaouais",
    description: "Plan your next canoe camping trip and book a shuttle service to bring your equipment to your departure point",
    title: "Shuttle service",
    subtitle: "Shuttle Service",
    activityDescription: `<p className='activity-text'>Location: from the reception to the destination of your choice</p><p className='activity-text'>Schedule: </p>
    <p className='activity-text'>Price: starting at 20$/person</p><p className='activity-text'>Inclusions:</p>`,
    reserve: "Book online",
    contact: "Contact Us!"
   
   },
  French: {
    seoTitle: "Service de navette pour transport de canot | Pontiac, Outaouais",
    description: "Planifier votre prochain voyage de canot camping et réservez notre service de navette pour transporter votre équiement à votre point de départ",
    title: "Service de Navette",
    subtitle: "Service de navette",
    activityDescription: `<p className='activity-text'>Emplacement: départ de la réception vers la destination de votre choix</p><p className='activity-text'> Horaire: </p>
    <p className='activity-text'>Prix : À partir de 20$/personne</p><p className='activity-text'>Inclusions: </p>`,
    reserve: 'Réserver',
    contact: "Contactez-Nous !"
  }
}

props.language === "English" ? (content = content.English) : (content = content.French);

  return (
      <div id="activity">
        <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
        </Helmet>
        <div className="activity">
        <section className="nav-image-navette">
            <div className="img-text">
              <h3 className="activity-title dark" onClick={handleClick}>{content.title}<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
        <section className="activity-info" ref={activityRef}>
            <h2 className="activity-summary">{content.subtitle}</h2>
            <div className="activity-container">
              <img className="tube-map" src="/images/map.png" alt="carte de la ville" />
              <div className="activity-text-container">
                {parse(content.activityDescription)}
              </div>
            </div>
            <a href="/contact" className="button reserve">{content.contact}</a>
          </section>
        </div>
      </div>
  )
}