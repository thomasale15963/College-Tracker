// Import Helpers
const { print_console } = require("../../utils/development");
const {
  newUniversityInfo,
  newUniversityInfoOne,
  newUniversityInfoTwo,
  newUniversityInfoThree,
  newUniversityInfoFour,
} = require("../../utils/pouplate");

const asyncHandler = require("express-async-handler");

// Import models
const University = require("../../models/University");

/*
    ===============================================================
    Controller Functions
    ===============================================================
*/

// Add New
const addNewUniversity = asyncHandler(async (request, response) => {
  const { information } = request.body;
  // console.log(information);
  // response.status(201).json(information);
  const newUniversity = await University.create(information);
  response.status(201).json(newUniversity);
});

// Update
const updateUniversity = asyncHandler(async (request, response) => {
  const { updateInfo } = request.body;

  await University.findByIdAndUpdate({ _id: request.params.Id }, updateInfo, {
    upsert: true,
  });

  response.status(200).json(await University.findById(request.params.Id));
});

// Remove
const deleteUniversity = asyncHandler(async (request, response) => {
  const university = await University.findByIdAndDelete(request.params.Id);
  response.status(201).json(university);
});

// Remove all
const deleteAllUniversities = asyncHandler(async (request, response) => {
  const allUniversities = await University.deleteMany();
  response.status(201).json(allUniversities);
});

// Get all
const getAllUniversities = asyncHandler(async (request, response) => {
  const allUniversities = await University.find();
  response.status(200).json(allUniversities);
});

// Get One
const getUniversity = asyncHandler(async (request, response) => {
  const university = await University.findById(request.params.Id);
  response.status(201).json(university);
});

module.exports = {
  addNewUniversity,
  updateUniversity,
  deleteUniversity,
  deleteAllUniversities,
  getAllUniversities,
  getUniversity,
  deleteUniversity,
  deleteAllUniversities,
  getAllUniversities,
  getUniversity,
};
