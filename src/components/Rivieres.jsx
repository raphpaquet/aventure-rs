import ScrollableTabsRiver from '../components/ScrollableTabsRiver';
 
export default function Rivieres(props) {



  let content = {
    English: {
      title: "Our Rivers",
      subtitle: "Here's the 3 navigable rivers of Pontiac",
    },
    French: {
      title: "Nos Rivières",
      subtitle: "Voici les 3 rivières naviguables de la région.",
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div className="section accent">
      <div className="container">
        <div className="section-title-group">
          <h1 className="section-heading centered">{content.title}</h1>
          <div className="section-subheading centered">{content.subtitle}</div>
          <div data-duration-in="300" data-duration-out="100" className="tabs-wrapper tabs">
            <ScrollableTabsRiver />
          </div>
        </div>
      </div>
    </div>
  )
}