function getYearForFooter() {
  const date = new Date();
  const year = date.getFullYear();

  return year;
}

function validateBasicInfoForm(values, keys) {
  var result = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] === "" || values[i] === null) result.push(keys[i]);
  }

  return result;
}

module.exports = {
  getYearForFooter,
  validateBasicInfoForm,
};
