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

function saveToSessionStorage(name, data) {
  try {
    sessionStorage.setItem(name, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
}

function getFromSessionStorage(name) {
  try {
    return sessionStorage.getItem(name);
  } catch (e) {
    return false;
  }
}
module.exports = {
  getYearForFooter,
  validateBasicInfoForm,
  saveToSessionStorage,
  getFromSessionStorage,
};
