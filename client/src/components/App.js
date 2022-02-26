import "../styles/App.css";

// import Home from "./Home";
import Footer from "./Footer";
import BodyNavigation from "./BodyNavigation";

import ResearchMode from "./Res/ResearchMode";

function App() {
  return (
    <section className="root__app">
      {/* <Home /> */}
      <BodyNavigation />
      <ResearchMode />
      <Footer />
    </section>
  );
}

export default App;
