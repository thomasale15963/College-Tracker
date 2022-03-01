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
const { protectRoute } = require("../../middlewares/authMiddleware");

/*
    ===============================================================
    All Routes
    ===============================================================
*/

router.post("/add", protectRoute, addNewUniversity);
router.put("/update/id/:Id", protectRoute, updateUniversity);
router.delete("/delete/id/:Id", protectRoute, deleteUniversity);
router.delete("/delete/all", protectRoute, deleteAllUniversities);
router.get("/get/id/:Id", protectRoute, getUniversity);
router.get("/get/all", protectRoute, getAllUniversities);

module.exports = router;
