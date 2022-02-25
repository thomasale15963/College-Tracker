const {
  addNewUniversity,
  updateUniversity,
  deleteUniversity,
  deleteAllUniversities,
  getUniversity,
  getAllUniversities,
} = require("../../controllers/university/universityController");

// Import express & router
const router = require("express").Router();

/*
    ===============================================================
    All Routes
    ===============================================================
*/

router.post("/add", addNewUniversity);
router.put("/update/id/:Id", updateUniversity);
router.delete("/delete/id/:Id", deleteUniversity);
router.delete("/delete/all", deleteAllUniversities);
router.get("/get/id/:Id", getUniversity);
router.get("/get/all", getAllUniversities);

module.exports = router;
