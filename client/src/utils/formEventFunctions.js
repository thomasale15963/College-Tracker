// Import Helpers
import { validateBasicInfoForm } from "./helpers";

export function basicInfoImageChange() {
  const file = document.getElementById("UniversityImageInput").files[0];
  const imagePreview = document.getElementById("UniversityImage");

  if (file) {
    const reader = new FileReader();

    const fileNames = file.name.split(".");

    if (
      fileNames[fileNames.length - 1] === "png" ||
      fileNames[fileNames.length - 1] === "jpg" ||
      fileNames[fileNames.length - 1] === "jpeg"
    ) {
      reader.addEventListener("load", function () {
        imagePreview.setAttribute("src", this.result);
      });
      reader.readAsDataURL(file);
    } else {
      imagePreview.setAttribute("src", "./assets/img/placeholder-image.jpg");
    }
  } else {
    imagePreview.setAttribute("src", "./assets/img/placeholder-image.jpg");
  }
}

export function basicInfoComplete() {
  // Get All Data
  // image file
  const possibleImageFile = document.getElementById("UniversityImageInput")
    .files[0];
  const imageFile = possibleImageFile ? possibleImageFile : null;
  //   U-name
  const universityName = document.getElementById("UniversityName").value;
  // U-rank
  const universityRank = document.getElementById("UniversityRank").value;
  // U-Country
  const universityCountry = document.getElementById("UniversityCountry").value;
  // U-state
  const universityState = document.getElementById("UniversityState").value;
  // U-city
  const universityCity = document.getElementById("UniversityCity").value;
  // U-Link
  const universityLink = document.getElementById("UniversityLink").value;
  // A-link
  const applicationLink = document.getElementById("ApplicationLink").value;
  // a-email
  const applicationEmail = document.getElementById("ApplicationEmail").value;
  // Validate All Data
  const formValidity = validateBasicInfoForm(
    [
      universityName,
      universityRank,
      universityCountry,
      universityCity,
      universityLink,
      applicationLink,
      applicationEmail,
    ],
    [
      "UniversityName",
      "UniversityRank",
      "UniversityCountry",
      "UniversityCity",
      "UniversityLink",
      "ApplicationLink",
      "ApplicationEmail",
    ]
  );
  console.log(formValidity);
  if (formValidity.length != 0) {
    console.log("FORM INVALID");
    formValidity.forEach((key) => {
      const inputElement = document.getElementById(key);
      const inputMessageElement = document.getElementById(key + "Message");
      inputElement.classList.add("error-border");
      inputMessageElement.classList.add("display", "error-text");
    });
  } else {
    const researchModeFormInputs = {
      name: universityName,
      image: imageFile,
      location: {
        country: universityCountry,
        city: universityCity,
        state: universityState,
      },
      ranking: universityRank,
      universityWebsiteLink: universityLink,
      programLink: splitterByComma("link", applicationLink),
      programEmail: splitterByComma("email", applicationEmail),
    };

    return researchModeFormInputs;
  }
  // Cache Data
}
function splitterByComma(itemName, arrayValue) {
  var result = [];
  arrayValue.split(",").forEach((item) => {
    result.push({
      itemName,
      item,
    });
  });
  return result;
}
export function basicInfoRemoveErrors() {
  [
    "UniversityName",
    "UniversityRank",
    "UniversityCountry",
    "UniversityCity",
    "UniversityLink",
    "ApplicationLink",
    "ApplicationEmail",
  ].forEach((key) => {
    const inputElement = document.getElementById(key);
    const inputMessageElement = document.getElementById(key + "Message");
    inputElement.classList.remove("error-border");
    inputMessageElement.classList.remove("display", "error-text");
  });
}

export function moreInfoComplete() {
  const costValue = document.getElementsByName("UniversityCost").value;
  const costCurrency = document.getElementsByName("UniversityCurrency").value;
  const acceptanceRate = document.getElementsByName(
    "UniversityAcceptance"
  ).value;

  if (!costValue) {
    // Error Border
    // Error Message
  } else if (!costCurrency) {
    // Error Border
    // Error Message
  } else if (!acceptanceRate) {
    // Error Border
    // Error Message
  }
}
