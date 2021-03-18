import '../App.scss';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import ArrowDown from '../components/ArrowDown';


export default function Homepage(props) {
    // Scroll down button arrow
    const activitySectionRef = useRef();
    const handleClick = () => {
      activitySectionRef.current.scrollIntoView({ behavior: 'smooth' })
     }

  let content = {
    English: {
      seoTitle: "River Tubing",
      description: "inflated tubes location to do river floating in Outaouais",
      name: "Wilderness river adventure",
      summary: "Canoe Camping Adventures agency of Outaouais",
      button: "Book Online for 2021 season"
    },
    French: {
      seoTitle: "Descente de rivière sur tube",
      description: "Location de tubes gonflables pour faire une descente de rivière",
      name: "Aventure rivière sauvage",
      summary: "Agence d'aventures de canot camping de l'Outaouais",
      button: "Réserver en ligne pour la saison 2021"
    }
  }

  props.language === "English" ? (content = content.English) : (content = content.French);

return (
    <div id="homepage">
      <main>
        <section className="hero-section centered">
          <video id="background-video" autoPlay loop muted type="video/mp4">
            <source src="canoe-video.mp4" />
            Sorry this video is unavailable
          </video>
          <h2 className="hero-heading">{content.name}</h2>
          <div className="hero-subheading">{content.summary}</div>
        <Link to="/reservations"><button className="button reserve">
          {content.button}
          </button></Link>
          <div className="arrow-app">
            <h5 onClick={handleClick}>Scroll Down</h5>
            <ArrowDown onClick={handleClick}/>
          </div>
        </section>
      </main>
      <div ref={activitySectionRef}></div>
    </div>

  )
}