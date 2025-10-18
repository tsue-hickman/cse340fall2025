/* ***************************
 * Error Handling Middleware
 * Wrap other function in this for 
 * General Error Handling
 *************************** */
const errorHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)

/* ***************************
 * Express Error Handler
 * Place after all other middleware
 *************************** */
const handleErrors = async (err, req, res, next) => {
  let nav = await require("../utilities/").getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  
  if(err.status == 404) {
    message = err.message
  } else {
    message = 'Oh no! There was a crash. Maybe try a different route?'
  }
  
  res.status(err.status || 500)
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message,
    nav
  })
}

module.exports = { errorHandler, handleErrors }