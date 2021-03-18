import './Canoe.scss';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import ArrowDown from '../components/ArrowDown';
import parse from 'html-react-parser';




export default function Tube(props) {


 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' });
 }

 let content = {
   English: {
     seoTitle: "River Tubing",
     description: "inflated tubes location to do river floating in Outaouais",
     title: "River tubing",
     subtitle: "Calm and peacful tubing river descent on 3km",
     activityDescription: `<p className='activity-text'> Length : approx 3 hours </p><p className='activity-text'>Difficulty: easy/beginner</p>
     <p className='activity-text'>Price: starting at 20$</p><p className='activity-text'>Inclusions: Tube & Shuttle to departure point </p>`,
     reserve: "Book online"
    
    },
   French: {
     seoTitle: "Descente de rivière sur tube",
     description: "Location de tubes gonflables pour faire une descente de rivière",
     title: "Descente de rivière sur tube",
     subtitle: "Descente de rivière de plaisance de 3km sur la Rivière Noire",
     activityDescription: `<p className='activity-text'> Durée : environ 3 heures </p><p className='activity-text'>Difficulté: facile/débutant</p>
     <p className='activity-text'>Prix : À partir de 20$</p><p className='activity-text'>Inclusions: Tube & Navette jusqu'au point de départ </p>`,
     reserve: 'Réserver'
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
        <section className="nav-image-tube">
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>{content.title}<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
          <section className="activity-info" ref={activityRef}>
            <h2 className="activity-summary">{content.subtitle}</h2>
            <div className="activity-container">
              <img className="tube-map" src="/images/map.png" alt="carte de riviere"/>
              <div className="activity-text-container">
                <hr /> {parse(content.activityDescription)}
                {/* <p className="activity-text">
                Durée : environ 3h
                </p>
                <p className="activity-text">
                Difficulté: facile/débutant
                </p>
                <p className="activity-text">
                Prix : À partir de 20$
                </p>
                <p className="activity-text">
                Inclusions: Tube & Navette jusqu'au point de départ 
                </p> */}
              </div>
            </div>
            <button className="button reserve">{content.reserve}</button>
          </section>
        </div>
      </div>
  )
}