import "../styles/App.css";

import Home from "./Home";
import Footer from "./Footer";
import BodyNavigation from "./BodyNavigation";
import ResearchBody from "./ResearchBody";

function App() {
  return (
    <section className="root__app">
      {/* <Home /> */}
      <BodyNavigation />
      <ResearchBody />
      <Footer />
    </section>
  );
}

export default App;
