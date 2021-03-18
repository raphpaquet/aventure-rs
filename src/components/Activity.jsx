import { Link } from 'react-router-dom';

export default function Activity(props) {

  let content = {
    English: {
      title: "What we offer",
      subtitle: "Fun for everyone !",
      canoe: "Canoe",
      canoeDescription: "",
      reserve: "Book online",
      tube: "Tubing",
      tubeDescription: "",
      bus: "Shuttle",
      busDescription: ""
    },
    French: {
      title: "Les activités offertes",
      subtitle: "Du plaisir pour tous !",
      canoe: "Canot",
      canoeDescription: "",
      reserve: "Réserver",
      tube: "Tubes",
      tubeDescription: "",
      bus: "Navette",
      busDescription: ""
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div className="section">
      <div className="container">
        <div className="section-title-group">
          <h2 className="section-heading centered">{content.title}</h2>
          <div className="section-subheading center">{content.subtitle}</div>
        </div>
        <div className="row">
          <div className="column col col-4">
            <Link to="/canoe"><div className="white-box"><img src="./images/icon-canoe.png" alt="logo" width="70" class="grid-image"/>
              <h3>{content.canoe}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="/reservations" className="button">{content.reserve}</a>
            </div></Link>
          </div>
          <div className="column col col-4">
            <Link to="/tube"><div className="white-box"><img src="./images/icon-tube.png" alt="logo" width="70" class="grid-image" />
              <h3>{content.tube}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="/reservations" className="button">{content.reserve}</a>
            </div></Link>
          </div>
          <div className="column col col-4">
            <Link to="/navette"><div className="white-box"><img src="./images/icon-bus.png" alt="logo" width="70" class="grid-image"/>
              <h3>{content.bus}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="/reservations" className="button">{content.reserve}</a>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}