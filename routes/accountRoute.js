const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require('../utilities/account-validation')
const { errorHandler } = require("../middleware/errorHandler")

// Route to build login view
router.get("/login", errorHandler(accountController.buildLogin))

// Route to build registration view
router.get("/register", errorHandler(accountController.buildRegister))

// Process registration
router.post(
  "/register",
  regValidate.registrationRules(),
  regValidate.checkRegData,
  errorHandler(accountController.registerAccount)
)

// Process login attempt
router.post(
  "/login",
  errorHandler(accountController.accountLogin)
)

module.exports = router