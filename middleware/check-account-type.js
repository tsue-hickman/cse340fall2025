const utilities = require("../utilities/")

/* ****************************************
 * Check Account Type Middleware
 * Only allows Employee or Admin types
 **************************************** */
function checkAccountType(req, res, next) {
  if (res.locals.loggedin) {
    const accountType = res.locals.accountData.account_type
    if (accountType === "Employee" || accountType === "Admin") {
      next()
    } else {
      req.flash("notice", "You do not have permission to access this page.")
      return res.redirect("/account/login")
    }
  } else {
    req.flash("notice", "Please log in.")
    return res.redirect("/account/login")
  }
}

module.exports = { checkAccountType }