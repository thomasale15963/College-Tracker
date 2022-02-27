// Import Style
import "../../styles/Res/ResearchForm.css";

// Import Sub Styles
import "../../styles/Res/Requirements.css";
// import "../../utils/backup.css";

// Import Components
import ResearchFormOne from "./form-parts/ResearchFormOne";

// Import Global State Provider
import { useStateProviderValue } from "../../utils/StateProvider";
import ResearchFormTwo from "./form-parts/ResearchFormTwo";

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
      <ResearchFormOne />
      <ResearchFormTwo />
    </form>
  );

  // return (
  //   <section className="research__body__container">
  //     <form className="research__body__form">
  //       {/* Basic Information */}
  //       <div>
  //         <h1 className="research__body__form__title">1. Basic Information</h1>
  //         {/* Name , Image and Rank */}
  //         <div className="research__body__name__image__rank__container">
  //           <img
  //             className="research__body__image"
  //             src="./assets/img/test_image.png"
  //           ></img>

  //           <div>
  //             <div className="research__body__name__container">
  //               <label htmlFor="NameInput" className="research__body__label">
  //                 University Name:
  //               </label>
  //               <input
  //                 type="text"
  //                 className="research__body__name__input input__item"
  //                 name="NameInput"
  //                 placeholder="Addis Ababa Institute of Technology"
  //               />
  //             </div>

  //             <div className="research__body__rank__container">
  //               <label htmlFor="RankInput" className="research__body__label">
  //                 University Rank:
  //               </label>
  //               <input
  //                 type="text"
  //                 className="research__body__rank__input  input__item"
  //                 name="RankInput"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         {/* Name , Image and Rank */}

  //         {/* Location Input */}
  //         <div className="research__body__location__container research__body__input__area__container">
  //           {/* Country Input */}
  //           <div className="research__body__input__area__container__inner">
  //             <label htmlFor="CountryInput" className="research__body__label">
  //               Country :
  //             </label>
  //             <select
  //               name="CountryInput"
  //               id="CountryInput"
  //               name="CountryInput"
  //               className="input__item input__item__small"
  //             >
  //               <option value="USA">USA</option>
  //               <option value="Canada">Canada</option>
  //               <option value="England">England</option>
  //               <option value="Australia">Australia</option>
  //               <option value="Germany">Germany</option>
  //               <option value="France">France</option>
  //               <option value="Spain">Spain</option>
  //               <option value="Netherlands">Netherlands</option>
  //               <option value="Italy">Italy</option>
  //               <option value="Norway">Norway</option>
  //               <option value="Sweden">Sweden</option>
  //               <option value="Denmark">Denmark</option>
  //               <option value="Finland">Finland</option>
  //               <option value="Switzerland">Switzerland</option>
  //             </select>
  //           </div>
  //           {/* Country Input */}

  //           {/* State Input */}
  //           <div className="research__body__input__area__container__inner">
  //             <label htmlFor="StateInput" className="research__body__label">
  //               State :
  //             </label>
  //             <input
  //               type="text"
  //               className="input__item input__item__small"
  //               name="StateInput"
  //             />
  //           </div>
  //           {/* State Input */}

  //           {/* City Input */}
  //           <div className="research__body__input__area__container__inner">
  //             <label htmlFor="CityInput" className="research__body__label">
  //               City :
  //             </label>
  //             <input
  //               type="text"
  //               className="input__item input__item__small"
  //               name="CityInput"
  //             />
  //           </div>
  //           {/* State Input */}
  //         </div>
  //         {/* Location Input */}

  //         {/* Links, Email Input */}
  //         <div className="research__body__links__email__container research__body__input__area__container">
  //           {/* University Website Link */}
  //           <div className="research__body__input__area__container__inner">
  //             <label
  //               htmlFor="WebsiteLinkInput"
  //               className="research__body__label"
  //             >
  //               University Website :
  //             </label>
  //             <input
  //               type="text"
  //               className="input__item input__item__small"
  //               name="WebsiteLinkInput"
  //             />
  //           </div>
  //           {/* University Website Link */}

  //           {/* Application Link Input */}
  //           <div className="research__body__input__area__container__inner">
  //             <label
  //               htmlFor="ApplicationInput"
  //               className="research__body__label"
  //             >
  //               Application Link :
  //             </label>
  //             <input
  //               type="text"
  //               className="input__item input__item__small"
  //               name="ApplicationInput"
  //             />
  //           </div>
  //           {/* Application Link Input */}

  //           {/* Application Email Input */}
  //           <div className="research__body__input__area__container__inner">
  //             <label
  //               htmlFor="ApplicationEmail"
  //               className="research__body__label"
  //             >
  //               Application Email :
  //             </label>
  //             <input
  //               type="text"
  //               className="input__item input__item__small"
  //               name="ApplicationEmail"
  //             />
  //           </div>
  //           {/* Application Email Input */}
  //         </div>
  //         {/* Links Email Input */}
  //       </div>
  //       {/* Basic Information */}

  //       <div className="research__body__faculty__container">
  //         <h1 className="research__body__form__title">
  //           2. Faculty Information
  //         </h1>
  //         {facultyInformation.map((item) => (
  //           <FacultyInput key={item} />
  //         ))}
  //         <div
  //           className="research__body__add__faculty__button"
  //           onClick={addFacultyInput}
  //         >
  //           {/* <AddOutlinedIcon className="research__body__add__faculty__icon" /> */}
  //           <span>Add New</span>
  //         </div>
  //       </div>
  //     </form>
  //   </section>
  // );
}

export default ResearchForm;
