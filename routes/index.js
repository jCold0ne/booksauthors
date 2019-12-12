const express = require('express') // Require in express
const router = express.Router() // Config express to use the built in router
const authorRoutes = require('./author_routes') // Require in auth_routes as authorRoutes
const booksRoutes = require("./book_routes")
const commentRoutes = require("./comment_routes")

// The below line is telling express that anything that uses the 'authors' route will use authorRoutes
// This becomes VERY useful when the app grows larger
// Because the routes can be split into different files

router.use('/authors', authorRoutes)
router.use("/books", booksRoutes)
router.use("/comments", commentRoutes)

module.exports = router
