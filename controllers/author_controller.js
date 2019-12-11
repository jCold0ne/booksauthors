const AuthorModel = require('./../database/models/author_model')

// Logic for creating a resource
async function create (req, res) {
  let { name, bio, gender } = req.body // Destructuring off the name, bio and gender from the req.body
  let author = await AuthorModel.create({ name, bio, gender }) // Creating the author
    .catch(err => res.status(500).send(err))
  res.redirect('/authors') // Redirect to /authors
}

// Showed a list of all the resources
async function index (req, res) {
  console.log("$$$$$$$$$$$$");
  let authors = await AuthorModel.find() // Extracting all the authors from the DB
  res.render('author/index', { authors }) // Render the 'author/index view' pass it the authors
}

// Shows the form to create the resource
function make (req, res) {
  res.render('author/new')
}

// The logic for the Show controller
async function show (req, res) {
  //   console.log(req.params)
  let { id } = req.params // Destructure the id off the params.
  let author = await AuthorModel.findById(id) // Find the author by id and add save it to the variable author
  res.render('author/show', { author }) // render the 'author/show' and pass it the {author}
}

// Logic for deleting one single author
async function destroy (req, res) {
  let { id } = req.params // Destructure off the id off req.params
  await AuthorModel.findByIdAndRemove(id) // Delete the author by finding them by the id
  res.redirect('/authors') // Redirect the user to the index page of all the authors
}

// Logic for showing the form for editing an author
async function edit (req, res) {
  let { id } = req.params // Destructure off the id off req.params
  let author = await AuthorModel.findById(id) // query the DB for the author by ID
  res.render('author/edit', { author }) // Pass that author through to 'authors/edit'
}

// The logic for updating by ID
async function update (req, res) {
  let { name, bio, gender } = req.body // Destructure name, bio and gender off req.body
  console.log(req.params)
  let { id } = req.params // Destructure off the id off req.params
  await AuthorModel.findByIdAndUpdate(id, { name, bio, gender }) // Update the author. Find by the id and then update with the new name, bio and gender
  res.redirect(`/authors/${id}`) // Redirect to the show page for author we just updated
}

module.exports = {
  create,
  index,
  make,
  show,
  update,
  edit,
  destroy
}
