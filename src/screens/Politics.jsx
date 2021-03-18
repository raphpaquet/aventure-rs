import { Helmet } from 'react-helmet';

export default function Politics(props) {

  let content = {
    English: {
      seoTitle: "River Tubing",
      description: "inflated tubes location to do river floating in Outaouais"
    },
    French: {
      seoTitle: "Descente de rivière sur tube",
      description: "Location de tubes gonflables pour faire une descente de rivière"
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);

  return (
    <div>
      <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
        </Helmet>

    </div>
  )
}