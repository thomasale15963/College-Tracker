const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");

const universitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name of University is required."],
    unique: [true, "University Already in the catalog."],
  },
  image: Buffer,
  location: [
    {
      country: {
        type: String,
        required: [true, "Country of University is required."],
      },
      state: {
        type: String,
      },
      city: {
        type: String,
        required: [true, "City of University is required."],
      },
    },
  ],

  acceptance: Number,

  ranking: {
    type: Number,
  },
  loanStatus: {
    type: String,
    required: [true, "Loan Status is required."],
  },

  cost: [
    {
      value: { type: Number, required: [true, "Cost Value is required"] },
      currency: { type: String, required: [true, "Currency is required."] },
    },
  ],

  coursePath: [
    {
      courseName: {
        type: String,
        required: [true, "Course Name is required."],
      },
      courseLength: {
        type: Number,
        required: [true, "Course Length is required."],
      },
      courseOptions: [
        {
          courseOptionType: String,
        },
      ],
      courseHasPHD: String,
      schoolHasPHD: String,
    },
  ],

  universityWebsiteLink: String,
  programLink: [{ link: String }],
  programEmail: [
    {
      email: String,
    },
  ],
  requirements: [
    {
      requirementName: {
        type: String,
        required: [true, "Requirement Name is vital."],
      },
      requirementInfo: {
        type: String,
        required: [true, "Requirement Information is vital."],
      },

      requirementRemark: {
        type: String,
      },
    },
  ],

  scholarships: [
    {
      scholarshipType: String,
      name: String,
      remark: String,
      value: Number,
      requirements: [
        {
          name: String,
          message: String,
          remark: String,
        },
      ],
      link: String,
      email: String,
    },
  ],

  faculty: [
    {
      name: {
        type: String,
        required: [true, "Faculty name is required."],
      },

      image: Buffer,
      position: String,
      link: String,
      email: String,
      info: String,
      educationalLevel: String,
    },
  ],
  remark: [{ name: String, description: String, remarkType: String }],
  campusImages: [
    {
      image: Buffer,
    },
  ],
});

module.exports = mongoose.model("University", universitySchema);
