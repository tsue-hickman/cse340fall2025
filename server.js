/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")


/* ***********************
 * Routes
 *************************/
app.use(static)
//Index Route
app.get("/", function(req,res) {
  res.render("index", {title: "Home"})
})


/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const HOST = 'localhost'
const PORT = 3000

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(PORT, () => {
  console.log(`trial app listening on ${HOST}:${PORT}`)
})