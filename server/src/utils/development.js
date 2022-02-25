const { bgYellow } = require("colors");

function print_console(
  { data = "No data" } = {},
  { printLocation = "Print Location not Added" } = {},
  { bgColor = "", textColor = "", underline = false } = {}
) {
  if (process.env.EXPRESS_ENV == "development") {
    var finalPrint = getUnderline(
      getTextColor(getBgColor(data, bgColor), textColor),
      underline
    );
    console.log(
      finalPrint,
      "Debugging ON. Please Review".toLocaleUpperCase().red.underline,
      printLocation.gray
    );
  }
}

function getBgColor(data, bgColor) {
  switch (bgColor) {
    case "":
      return data;

    case "bgYellow":
      return data.bgYellow;
    case "bgBlue":
      return data.bgBlue;
    case "bgCyan":
      return data.bgCyan;
    case "bgGreen":
      return data.bgGreen;
    case "bgRed":
      return data.bgRed;
    case "bgGrey":
      return data.bgGrey;
  }
}

function getTextColor(data, textColor) {
  switch (textColor) {
    case "":
      return data;

    case "black":
      return data.black;
    case "blue":
      return data.blue;
    case "cyan":
      return data.cyan;
    case "green":
      return data.green;
    case "red":
      return data.red;
    case "grey":
      return data.grey;
    case "yellow":
      return data.yellow;
    default:
      return data.white;
  }
}

function getUnderline(data, underline) {
  switch (underline) {
    case false:
      return data;

    case true:
      return data.underline;
  }
}

const sampleImageOneBase64 =
  "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";

module.exports = {
  print_console,
  sampleImageOneBase64,
};
