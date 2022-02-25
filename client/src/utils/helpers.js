function getYearForFooter() {
  const date = new Date();
  const year = date.getFullYear();

  return year;
}

module.exports = {
  getYearForFooter,
};
