import './Canoe.scss';
import ArrowDown from '../components/ArrowDown';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import ScrollableTabsButtonAuto from '../components/ScrollableTabs';



export default function Canoe(props) {

  let content = {
    English: {
      seoTitle: "Canoe Location",
      description: "Canoe location for canoe camping trip in Pontiac",
      title: "Canoe & Canoe/Camping",
    },
    French: {
      seoTitle: "Location de canot",
      description: "Location de canot pour des aventures de canot camping dans Pontiac",
      title: "Canot & Canot/Camping",
    }
  }

  props.language === "English" ? (content = content.English) : (content = content.French);
  
 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' })
 }

  return (
      <div id="activity">
        <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
        </Helmet>
        <div className="activity">
        <section className="nav-image-canoe">
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>{content.title}<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
        <section className="activity-info" ref={activityRef}>
          <ScrollableTabsButtonAuto 
          language={props.language}
          />
          </section>
        </div>
      </div>
  )
}