import './Reservations.scss';
import { Helmet } from 'react-helmet';

export default function Reservations(props) {

  let content = {
    English: {
      seoTitle: "Online booking for canoe & inflated tube location | Pontiac, Outaouais.",
      description: "Book for your next canoe camping trip, shuttle service or inflated tubes rental",
      title: "Online Booking"
    },
    French: {
      seoTitle: "Réservation en ligne pour location de canot et de tubes | Pontiac, Outaouais",
      description: "Réserver pour votre prochain voyage de canot camping, service de navette ou location de tubes gonflables",
      title: "Réservation en ligne"
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);


  return (
    <div id="reservation">
      <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
          <link rel="canonical" href="https://aventure-riviere-sauvage.web.app/reservations" />
        </Helmet>
      <h2 className="title">{content.title}</h2>
      <img src="/images/coming-soon.png" alt="coming soon paint brush orange" className="coming-soon" />
    </div>
  )
}