const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")
const errorHandler = require("../middleware/errorHandler")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = errorHandler.errorHandler(async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
})

/* ***************************
 *  Build inventory item detail view
 * ************************** */
invCont.buildByInventoryId = errorHandler.errorHandler(async function (req, res, next) {
  const inv_id = req.params.invId
  const data = await invModel.getInventoryByInventoryId(inv_id)
  const detail = await utilities.buildDetailView(data)
  let nav = await utilities.getNav()
  const vehicleName = `${data.inv_year} ${data.inv_make} ${data.inv_model}`
  res.render("./inventory/detail", {
    title: vehicleName,
    nav,
    detail,
  })
})

/* ***************************
 *  Intentionally trigger a 500 error
 * ************************** */
invCont.triggerError = errorHandler.errorHandler(async function (req, res, next) {
  throw new Error('Intentional 500 error triggered for testing purposes')
})

module.exports = invCont