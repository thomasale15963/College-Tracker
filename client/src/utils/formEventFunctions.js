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

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export async function basicInfoComplete() {
  // Get All Data
  // image file
  const imageFile = document.getElementById("UniversityImageInput").files[0];
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
  if (formValidity.length !== 0) {
    formValidity.forEach((key) => {
      const inputElement = document.getElementById(key);
      const inputMessageElement = document.getElementById(key + "Message");
      inputElement.classList.add("error-border");
      inputMessageElement.classList.add("display", "error-text");
    });
  } else {
    // process image
    const imageUrl = await getBase64(imageFile);
    const researchModeFormInputs = {
      name: universityName,
      image: imageUrl ? imageUrl : "",
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

    console.log(researchModeFormInputs);
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
  var values;
  const costValue = document.getElementsByName("UniversityCost")[0].value;
  const costCurrency =
    document.getElementsByName("UniversityCurrency")[0].value;
  const acceptanceRate = document.getElementsByName("UniversityAcceptance")[0]
    .value;
  const loanStatus = document.querySelector(
    'input[name="LoanStatus"]:checked'
  )?.value;
  if (!costValue) {
    // Error Border
    const costInputElement = document.getElementById("UniversityCost");
    costInputElement.classList.add("error-border");
    // Error Message
    const costInputMessageElement = document.getElementById(
      "UniversityCostMessage"
    );
    costInputElement.classList.add("error-border");
    costInputMessageElement.classList.add("display", "error-text");
  }
  if (!costCurrency) {
    // Error Border
    const currencyInputElement = document.getElementById("UniversityCurrency");
    // Error Message
    const currencyInputMessageElement = document.getElementById(
      "UniversityCurrencyMessage"
    );
    currencyInputElement.classList.add("error-border");
    currencyInputMessageElement.classList.add("display", "error-text");
    // Error Message
  }
  if (!acceptanceRate) {
    // Error Border
    const acceptanceInputElement = document.getElementById(
      "UniversityAcceptance"
    );
    // Error Message
    const acceptanceInputMessageElement = document.getElementById(
      "UniversityAcceptanceMessage"
    );
    acceptanceInputElement.classList.add("error-border");
    acceptanceInputMessageElement.classList.add("display", "error-text");
  }
  if (!loanStatus) {
    document
      .getElementById("LoanStatusMessage")
      .classList.add("display", "error-text");
  }

  // get all req
  const allRequirementNames = document.getElementsByName("RequirementName");
  const allRequirementInfo = document.getElementsByName("RequirementInfo");
  const allRequirementRemark = document.getElementsByName("RequirementRemark");

  var allRequirements = [];

  for (let i = 0; i < allRequirementNames.length; i++) {
    if (allRequirementNames[i].value) {
      allRequirements.push({
        requirementName: allRequirementNames[i].value,
        requirementInfo: allRequirementInfo[i].value,
        requirementRemark: allRequirementRemark[i].value,
      });
    }
  }

  // get all req
  const allRemarkNames = document.getElementsByName("RequirementName");
  const allRemarkTypes = document.getElementsByName("RemarkType");
  const allRemarkMessages = document.getElementsByName("RemarkMessage");

  var allRemarks = [];

  for (let i = 0; i < allRemarkNames.length; i++) {
    if (allRemarkNames[i].value) {
      allRemarks.push({
        remarkMessage: allRemarkNames[i].value,
        allRemarkTypes: allRemarkTypes[i].value,
        allRemarkMessages: allRemarkMessages[i].value,
      });
    }
  }

  if (costCurrency && acceptanceRate && costValue && loanStatus) {
    values = {
      costValue,
      costCurrency,
      acceptanceRate,
      loanStatus,
      allRequirements,
      allRemarks,
    };
  }

  return values;
}

export function moreInfoRemoveErrors() {
  // Error Border
  const costInputElement = document.getElementById("UniversityCost");
  costInputElement.classList.remove("error-border");
  // Error Message
  const costInputMessageElement = document.getElementById(
    "UniversityCostMessage"
  );
  costInputElement.classList.remove("error-border");
  costInputMessageElement.classList.remove("display", "error-text");

  // Error Border
  const currencyInputElement = document.getElementById("UniversityCurrency");
  // Error Message
  const currencyInputMessageElement = document.getElementById(
    "UniversityCurrencyMessage"
  );
  currencyInputElement.classList.remove("error-border");
  currencyInputMessageElement.classList.remove("display", "error-text");
  // Error Message

  // Error Border
  const acceptanceInputElement = document.getElementById(
    "UniversityAcceptance"
  );
  // Error Message
  const acceptanceInputMessageElement = document.getElementById(
    "UniversityAcceptanceMessage"
  );
  acceptanceInputElement.classList.remove("error-border");
  acceptanceInputMessageElement.classList.remove("display", "error-text");

  document
    .getElementById("LoanStatusMessage")
    .classList.remove("display", "error-text");
}
