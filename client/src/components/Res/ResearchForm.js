// Import Style
import "../../styles/Res/ResearchForm.css";

// Import Sub Styles
import "../../styles/Res/Research.css";
// import "../../utils/backup.css";

// Import Components
import ResearchFormOne from "./form-parts/ResearchFormOne";
import ResearchFormTwo from "./form-parts/ResearchFormTwo";
import ResearchFormThree from "./form-parts/ResearchFormThree";

// Import Global State Provider
import { useStateProviderValue } from "../../utils/StateProvider";

import { Route, Routes } from "react-router-dom";

import Loader from "../Loader";
import SomethingWentWrong from "../SomethingWentWrong";

//
// import FacultyInput from "../parts/FacultyInput";

function ResearchForm() {
  const [{ facultyInformationValue }, dispatch] = useStateProviderValue();
  var facultyInformation = [...Array(facultyInformationValue).keys()];

  function addFacultyInput() {
    console.log("Testing Button");
    dispatch({
      type: "INCREASE_FACULTY_INPUT",
      facultyInformationValue: facultyInformationValue + 1,
    });
  }

  return (
    <form className="research__form__main__container" action="/">
      <Routes>
        <Route path="/" element={<ResearchFormOne />}></Route>
      </Routes>

      <Routes>
        <Route path="/form-two" element={<ResearchFormTwo />}></Route>
      </Routes>

      <Routes>
        <Route path="/form-three" element={<ResearchFormThree />}></Route>
      </Routes>

      <Routes>
        <Route path="/loader" element={<Loader />} />
      </Routes>

      <Routes>
        <Route path="/error" element={<SomethingWentWrong />} />
      </Routes>
    </form>
  );
}

export default ResearchForm;
