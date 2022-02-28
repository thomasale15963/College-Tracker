import "../styles/App.css";

// import Home from "./Home";
import Footer from "./Footer";
import BodyNavigation from "./BodyNavigation";

import ResearchMode from "./Res/ResearchMode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <section className="root__app">
        {/* <Home /> */}
        <BodyNavigation />

        <ResearchMode />

        <Footer />
      </section>
    </Router>
  );
}

export default App;
