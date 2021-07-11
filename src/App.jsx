import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
      <Intro/>
      <Portfolio/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
