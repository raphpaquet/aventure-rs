import './About.scss';
import { Helmet } from 'react-helmet';

export default function About(props) {

  let content = {
    English: {
      seoTitle: "About Wilderness River Adventure",
      description: "Learn more about our mission, our team and about the region of Pontiac.",
      title: "About Wilderness River Adventure",
      missionTitle: "Our Mission",
      missionP: "",
      teamTitle: "Our Team",
      teamP: "",
      regionTitle: "Our Region",
      regionP: ""
    },
    French: {
      seoTitle: "À propos d'Aventure Rivière Sauvage",
      description: "Apprenez-en plus sur notre mission d'entreprise, notre équipe et la région du Pontiac.",
      title: "À propos d'Aventure Rivière Sauvage",
      missionTitle: "Notre Mission",
      missionP: "",
      teamTitle: "Notre équipe",
      teamP: "",
      regionTitle: "La région",
      regionP: ""
    }
  }

  console.log(props.language)
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div id="about">
      <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
        </Helmet>
        <h2 className="title">{content.title}</h2>
        <div className="about-container">
          <div className="about-content">
              <img className="about-img" src="/images/ARS_canoe_fire.jpeg" alt="feu de camp sur la plage avec canot"/>
              <div className="about-text">
                <h3>{content.missionTitle}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet. Tristique senectus et netus et malesuada fames ac turpis. Quis lectus nulla at volutpat diam ut venenatis. Lectus quam id leo in vitae turpis massa. Fusce id velit ut tortor pretium viverra suspendisse potenti. Mauris a diam maecenas sed enim ut sem viverra aliquet. Facilisi morbi tempus iaculis urna id volutpat lacus. Nulla porttitor massa id neque. Magna fermentum iaculis eu non. Sit amet luctus venenatis lectus magna fringilla urna. Quam pellentesque nec nam aliquam sem et tortor consequat id. Morbi quis commodo odio aenean sed adipiscing diam. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Auctor urna nunc id cursus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet.</p>
              </div>
          </div>
          <div className="about-content">
            <div className="about-text">
                <h3>{content.teamTitle}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet. Tristique senectus et netus et malesuada fames ac turpis. Quis lectus nulla at volutpat diam ut venenatis. Lectus quam id leo in vitae turpis massa. Fusce id velit ut tortor pretium viverra suspendisse potenti. Mauris a diam maecenas sed enim ut sem viverra aliquet. Facilisi morbi tempus iaculis urna id volutpat lacus. Nulla porttitor massa id neque. Magna fermentum iaculis eu non. Sit amet luctus venenatis lectus magna fringilla urna. Quam pellentesque nec nam aliquam sem et tortor consequat id. Morbi quis commodo odio aenean sed adipiscing diam. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Auctor urna nunc id cursus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet.</p>
              </div>
              <img className="about-img" src="/images/stretch.jpg" alt="fille qui s'etire devant une tente"/>
          </div>
          <div className="about-content">
              <img className="about-img hide" src="/images/feu.jpg" alt="bras tattoue avec feu de camp"/>
              <div className="about-text">
                <h3>{content.regionTitle}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet. Tristique senectus et netus et malesuada fames ac turpis. Quis lectus nulla at volutpat diam ut venenatis. Lectus quam id leo in vitae turpis massa. Fusce id velit ut tortor pretium viverra suspendisse potenti. Mauris a diam maecenas sed enim ut sem viverra aliquet. Facilisi morbi tempus iaculis urna id volutpat lacus. Nulla porttitor massa id neque. Magna fermentum iaculis eu non. Sit amet luctus venenatis lectus magna fringilla urna. Quam pellentesque nec nam aliquam sem et tortor consequat id. Morbi quis commodo odio aenean sed adipiscing diam. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Auctor urna nunc id cursus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet.</p>
              </div>
          </div>
        </div>
    </div>
  )
}