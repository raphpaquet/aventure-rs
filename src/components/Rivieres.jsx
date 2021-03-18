import ScrollableTabsRiver from '../components/ScrollableTabsRiver';
 
export default function Rivieres(props) {



  let content = {
    English: {
      title: "the Rivers",
      subtitle: "Here's the 3 navigable rivers of Pontiac",
      noire: "Rivière Noire",
      noireDescription: "",
      info: "More info",
      mauve: "Rivière Mauve",
      mauveDescription: "",
      orange: "Rivière Orange",
      orangeDescription: ""
    },
    French: {
      title: "Les Rivières",
      subtitle: "Voici les 3 rivières naviguables de la région.",
      noire: "Rivière Noire",
      noireDescription: "",
      info: "Plus d'info",
      mauve: "Rivière Mauve",
      mauveDescription: "",
      orange: "Rivière Orange",
      orangeDescription: ""
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div className="section accent">
      <div className="container">
        <div className="section-title-group">
          <h2 className="section-heading centered">{content.title}</h2>
          <div className="section-subheading centered">{content.subtitle}</div>
          <div data-duration-in="300" data-duration-out="100" className="tabs-wrapper tabs">
            <ScrollableTabsRiver />
          </div>
        </div>
      </div>
    </div>
  )
}