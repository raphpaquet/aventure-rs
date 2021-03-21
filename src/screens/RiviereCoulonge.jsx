import './Riviere.scss';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import MapContainer from '../components/Map';
import Modal from '../components/Modal'

export default function RiviereCoulonge(props) {

  const data = "/PDF/NoirePDF.pdf";

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
      cards: "Consult River Cards*",
      cardWebsite: "* River cards are from"
    },
    French: {
      seoTitle: "Riviere Coulonge de l'Outaouais",
      description: "La Rivière Coulonge est située dans la municipalité de Pontiac, Outaouais. Cette rivière est très prisée par les amateurs de canot",
      riverDescription: "",
      cards: "Consultez les cartes de la Rivière*",
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
      <h1 className="title">La Rivière Coulonge</h1>
      <div className="river-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam viverra orci sagittis eu volutpat. Placerat vestibulum lectus mauris ultrices eros in. In nibh mauris cursus mattis molestie a iaculis. Fermentum odio eu feugiat pretium nibh. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Blandit turpis cursus in hac. Tempor id eu nisl nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien.</p>
        <img src="./images/river.jpg" alt="riviere Mauve" className="river-image"/>
        <p>Facilisis gravida neque convallis a cras semper auctor. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Vivamus arcu felis bibendum ut tristique et. Vel risus commodo viverra maecenas accumsan lacus vel. Tincidunt vitae semper quis lectus nulla. Risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
        <MapContainer 
          className="river-map"
          position={positionCoulonge}
          name={name}
        />
      <div className="carte-container">
          <Modal 
            data={data}
            language={props.language}
          />
      </div>
      <div className="carte-container-small-screen">
        <a href="http://www.cartespleinair.org/Canot/04/NoireOutaouaisLeduc2018.pdf" target="_blank" className="button">{content.cards}</a>
      </div>
        <p>Molestie nunc non blandit massa enim nec dui nunc mattis. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Nunc congue nisi vitae suscipit tellus mauris. Iaculis urna id volutpat lacus laoreet. Magnis dis parturient montes nascetur ridiculus. Enim facilisis gravida neque convallis. Tortor at risus viverra adipiscing at in tellus integer feugiat. Euismod lacinia at quis risus sed vulputate odio ut enim. Ornare suspendisse sed nisi lacus. Neque ornare aenean euismod elementum nisi quis.</p>
      </div>
      <div className="cards-website">{content.cardWebsite}: <a href="http://www.cartespleinair.org/Canot/cartes.html" target="_blank">www.cartespleinair.org</a></div>
        {/* <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#082a48" fill-opacity="1" d="M0,256L34.3,266.7C68.6,277,137,299,206,277.3C274.3,256,343,192,411,192C480,192,549,256,617,272C685.7,288,754,256,823,229.3C891.4,203,960,181,1029,186.7C1097.1,192,1166,224,1234,234.7C1302.9,245,1371,235,1406,229.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
  )
}