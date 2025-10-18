const utilities = require("../utilities/")
const errorHandler = require("../middleware/errorHandler")
const baseController = {}

baseController.buildHome = errorHandler.errorHandler(async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
})

module.exports = baseController