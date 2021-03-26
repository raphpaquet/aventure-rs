import './Riviere.scss';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MapContainer from '../components/Map';
import Modal from '../components/Modal'
import ScrollToTop from '../components/ScrollToTop';
import AOS from 'aos';
import "aos/dist/aos.css"


export default function RiviereCoulonge(props) {
  
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])

  const data = "/PDF/CoulongePDF.pdf";

   const positionCoulonge = {
    lat: 46.014310, 
    lng: -76.767663
  }
  const name = "Rivière Coulonge"

  let content = {
    English: {
      seoTitle: "Riviere Coulonge of Outaouais",
      description: "The Coulonge river is located in the municipality of Pontiac, Outaouais. This river is very popular with canoeists.",
      riverDescription: "",
      cardWebsite: "* River cards are from"
    },
    French: {
      seoTitle: "Riviere Coulonge de l'Outaouais",
      description: "La Rivière Coulonge est située dans la municipalité de Pontiac, Outaouais. Cette rivière est très prisée par les amateurs de canot",
      riverDescription: "",
      cardWebsite: "* Les cartes de rivières proviennent de"
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);


  return (
    <div className="riviere">
      <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
          <link rel="canonical" href="https://aventure-riviere-sauvage.web.app/rivierecoulonge" />
        </Helmet>
      <ScrollToTop />
      <h1 className="title" data-aos={"fade-down"}>La Rivière Coulonge</h1>
      <div className="river-description" data-aos={"fade-down"}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam viverra orci sagittis eu volutpat. Placerat vestibulum lectus mauris ultrices eros in. In nibh mauris cursus mattis molestie a iaculis. Fermentum odio eu feugiat pretium nibh. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Blandit turpis cursus in hac. Tempor id eu nisl nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien.</p>
        <img src="./images/river.jpg" alt="riviere Mauve" className="river-image" data-aos={"fade-down"}/>
        <p data-aos={"fade-down"}>Facilisis gravida neque convallis a cras semper auctor. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Vivamus arcu felis bibendum ut tristique et. Vel risus commodo viverra maecenas accumsan lacus vel. Tincidunt vitae semper quis lectus nulla. Risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
        <div className="map-container">
          <MapContainer 
          className="river-map"
          position={positionCoulonge}
          name={name}
          />
        </div>
      <div className="carte-container">
          <Modal 
            data={data}
            language={props.language}
          />
      </div>
      {/* <div className="carte-container-small-screen">
        <a href="http://www.cartespleinair.org/Canot/04/NoireOutaouaisLeduc2018.pdf" target="_blank" className="button">{content.cards}</a>
      </div> */}
        <p>Molestie nunc non blandit massa enim nec dui nunc mattis. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Nunc congue nisi vitae suscipit tellus mauris. Iaculis urna id volutpat lacus laoreet. Magnis dis parturient montes nascetur ridiculus. Enim facilisis gravida neque convallis. Tortor at risus viverra adipiscing at in tellus integer feugiat. Euismod lacinia at quis risus sed vulputate odio ut enim. Ornare suspendisse sed nisi lacus. Neque ornare aenean euismod elementum nisi quis.</p>
      </div>
      <div className="cards-website">{content.cardWebsite}: <a href="http://www.cartespleinair.org/Canot/cartes.html" target="_blank">www.cartespleinair.org</a></div>
    </div>
  )
}