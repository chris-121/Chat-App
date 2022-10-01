const usersController = require("../controller/usersController")
const router = require("express").Router();

router.post("/register",usersController.register)
router.post("/login",usersController.login)
router.post("/setAvatar/:id",usersController.setAvatar)
router.get("/allUsers/:id",usersController.getAllUsers)

module.exports = router