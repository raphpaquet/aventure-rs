import { Helmet } from 'react-helmet';

export default function Security(props) {

  let content = {
    English: {
      seoTitle: "River Security guide",
      description: "How to be safe on our Rivers while doing Canoe Camping",
      title: "Security"
    },
    French: {
      seoTitle: "Sécurité sur les rivières",
      description: "Guide de sécurité pour le canot camping",
      title:"Sécurité"
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div>
      <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
          <link rel="canonical" href="https://aventure-riviere-sauvage.web.app/security" />
        </Helmet>
      <h2 className="title">{content.title}</h2>
      <img src="/images/coming-soon.png" alt="coming soon paint brush orange" className="coming-soon" />
    </div>
  )
}