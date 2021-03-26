import Caroussel from "../components/Caroussel";
import './Gallery.scss'

export default function Gallery(props) {

  let content = {
    English: {
      seoTitle: "Riviere Noire Outaouais",
      description: "The Black river is located in the municipality of Pontiac, Outaouais. This river is very popular with canoeists. ",
      title: "Photo Gallery",
      subtitle: ""
    },
    French: {
      seoTitle: "Riviere Noire Outaouais",
      description: "La Rivière Noire est située dans la municipalité de Pontiac, Outaouais. Cette rivière est très prisée par les amateurs de canot",
      title: "Galerie photo",
      subtitle: ""
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div className="gallery">
      <h1 className="title">{content.title}</h1>
      <Caroussel />
      <div className="grid-photo">
        <img src="/images/instagram-photo.jpg" />
      </div>
    </div>
  )
}