import '../App.scss';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import ArrowDown from '../components/ArrowDown';
import ScrollToTop from '../components/ScrollToTop';


export default function Homepage(props) {
    // Scroll down button arrow
    const activitySectionRef = useRef();
    const handleClick = () => {
      activitySectionRef.current.scrollIntoView({ behavior: 'smooth' })
     }

  let content = {
    English: {
      seoTitle: "Wild River Adventure | Pontiac, Outaouais",
      description: "Canoe camping adventures agency and tube renting in Outaouais",
      name: "West River Adventure",
      summary: "Canoe Camping in Quebec | FAKE WEBSITE",
      button: "Book Online for 2021 season"
    },
    French: {
      seoTitle: "Aventure Rivière Sauvage",
      description: "Agence d'aventures de canot camping et de location de tubes en Outaouais",
      name: "Aventure Riviere de l'Ouest",
      summary: "canot camping au Quebec | FAUX SITE WEB",
      button: "Réserver en ligne pour la saison 2021"
    }
  }

  props.language === "English" ? (content = content.English) : (content = content.French);

return (
    <div id="homepage">
      <ScrollToTop />
      <main>
        <section className="hero-section centered">
          <video id="background-video" autoPlay loop muted type="video/mp4">
            <source src="canoe-video.mp4" />
            Sorry this video is unavailable
          </video>
          <h1 className="hero-heading">{content.name}</h1>
          <div className="hero-subheading">{content.summary}</div>
        <Link to="/reservations"><button className="button reserve special">
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