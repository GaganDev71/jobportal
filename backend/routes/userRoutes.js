const router = require("express").Router();
const { registerController, loginController } = require("../controllers/userController.js")

router.post("/register", registerController)
router.post("/login", loginController)

module.exports = router

// getprofile (byauth),
// delete account,
// updateprofileimage,
// updateResume.
// updatepersonal_inform 
