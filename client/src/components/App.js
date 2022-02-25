import "../styles/App.css";

import Home from "./Home";
import Footer from "./Footer";
import BodyNavigation from "./BodyNavigation";

function App() {
  return (
    <section className="root__app">
      {/* <Home /> */}
      <BodyNavigation />
      <Footer />
    </section>
  );
}

export default App;
