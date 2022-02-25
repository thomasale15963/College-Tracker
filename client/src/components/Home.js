import "../styles/Home.css";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";

function Home() {
  return (
    <div className="home__root">
      <div className="home__hero">
        <h1 className="home__display">College Tracker</h1>
        <h3 className="home__description">Find the University for you</h3>
        <div className="home__options__container">
          <div className="home__options__button__container">
            <ScienceOutlinedIcon className="home__options__button_icon" />
            <a href="" className="home__option">
              Research Mode
            </a>
          </div>

          <div className="home__options__button__container">
            <PreviewOutlinedIcon className="home__options__button_icon" />
            <a href="" className="home__option">
              View Mode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
