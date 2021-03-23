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
     description: "Come enjoy the lovely flow of the rivers and float your way down on our renting tubes.",
     title: "River tubing on Rivière Noire",
     subtitle: "Calm and peacful descent of 7km",
     activityDescription: `<p className='activity-text'> Length : approx 3 hours </p><p className='activity-text'>Difficulty: easy/beginner</p>
     <p className='activity-text'>Price: starting at 20$</p><p className='activity-text'>Inclusions: Tube & Shuttle to departure point </p>`,
     reserve: "Book online"
    
    },
   French: {
     seoTitle: "Descente de rivière sur tube",
     description: "Venez profiter de l'agréable courant des rivières et descendez en flottant sur nos tubes de location.",
     title: `Descente de la Rivière Noire sur tube`,
     subtitle: "Descente de rivière de plaisance de 7km sur la Rivière Noire",
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
          <link rel="canonical" href="https://aventure-riviere-sauvage.web.app/tube" />
        </Helmet>
        <div className="activity">
        <section className="nav-image-tube">
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>{parse(content.title)}<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
          <section className="activity-info" ref={activityRef}>
            <h2 className="activity-summary">{content.subtitle}</h2>
            <div className="activity-container">
              <img className="tube-map" src="/images/map.png" alt="carte de riviere"/>
              <div className="activity-text-container">
                <hr /> {parse(content.activityDescription)}
              </div>
            </div>
            <button className="button reserve">{content.reserve}</button>
          </section>
        </div>
      </div>
  )
}