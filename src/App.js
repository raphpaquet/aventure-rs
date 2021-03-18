import './App.scss';
import Footer from './components/Footer';
import { useRef, useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Helmet } from 'react-helmet';
import About from './screens/About';
import Contact from './screens/Contact';
import Reservations from './screens/Reservations';
import Canoe from './screens/Canoe';
import Tube from './screens/Tube';
import Navette from './screens/Navette';
import Security from './screens/Security';
import Politics from './screens/Politics';
import RiviereNoire from './screens/RiviereNoire';
import Activity from './components/Activity';
import Rivieres from './components/Rivieres';
import Navigation from './components/Navigation';
import Homepage from './screens/Homepage';
import NavigationBG from './components/NavgationBG';
import RiviereCoulonge from './screens/RiviereCoulonge';
import RiviereDumoine from './screens/RiviereDumoine';
import Gallery from './screens/Gallery';


const history = createBrowserHistory();


function App(props) {

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }


  let content = {
    English: {
      seoTitle: "Canoe Camping Québec - Wilderness River Adventure",
      description: "Plan your next canoe camping trip in the beautiful region of Outaouais. Rent canoe and inflated tubes and have fun on the rivers",
      name: "Wilderness river adventure",
      summary: "Canoe Camping Adventures agency of Outaouais",
      button: "Book for 2021 season"
    },
    French: {
      seoTitle: "Canot Camping Québec - Aventure Rivière Sauvage",
      description: "Planifier votre prochaine aventure de canot camping dans la belle région de l'Outaouais. Location de canot et tubes.",
      name: "Aventure rivière sauvage",
      summary: "Agence d'aventures de canot camping de l'Outaouais",
      button: "Réserver pour la saison 2021"
    }
  }

  props.language === "English" ? (content = content.English) : (content = content.French);


  // Scroll down button arrow
  const activitySectionRef = useRef();


  return (
    <Router history={history} language={language}>
      <div className="App">
        <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
        </Helmet>
              <nav className="navbarApp" >
                <NavigationBG className="nav-big-screen"
                  language={language}
                  handleSetLanguage={language => {
                    setLanguage(language);
                    storeLanguageInLocalStorage(language)
                  }}
                  ref={activitySectionRef}
                  />
              </nav>
              <Switch>
            <Route path="/" exact>
              <Homepage language={language}/>
              <div ref={activitySectionRef} >
              <Activity language={language}
              />
              </div>
              <Rivieres language={language}/>
            </Route>
            <Route path="/canoe">
              <Canoe language={language}/> 
            </Route>
            <Route path="/tube">
                <Tube language={language}/>
            </Route>
            <Route path="/navette">
                <Navette language={language}/>
            </Route>
            <Route path="/about">
              <About language={language} />
            </Route>
            <Route path="/rivierenoire">
                <RiviereNoire language={language} />
            </Route>
            <Route path="/rivierecoulonge">
                <RiviereCoulonge language={language} />
            </Route>
            <Route path="/rivieredumoine">
                <RiviereDumoine language={language} />
            </Route>
            <Route path="/reservations">
                <Reservations language={language}/>
            </Route> 
            <Route path="/contact">
              <Contact language={language}/>
            </Route>
            <Route path="/securite" >
                <Security language={language}/>
            </Route>
            <Route path="/gallery" >
                <Gallery language={language}/>
            </Route>
            <Route path="/politique" component={Politics} language={language} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
