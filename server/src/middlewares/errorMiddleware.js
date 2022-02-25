const { print_console } = require("../utils/development");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.EXPRESS_ENV === "development" ? err.stack : null,
  });

  print_console(
    {
      message: err.message,
      // stack: process.env.EXPRESS_ENV === "development" ? err.stack : null,
    },
    { textColor: "red" }
  );
};

module.exports = errorHandler;
