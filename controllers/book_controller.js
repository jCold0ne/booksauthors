const BookModel = require("../database/models/book_model");

async function create (req, res) {
    let { title } = req.body;
    let book = await BookModel.create({ title })
        .catch(err => res.status(500).send(err))
    res.redirect("/books");
};

async function index (req, res) {
    console.log(BookModel);
    let books = await BookModel.find()
    res.render("book/index", { books })
};


function make (req, res) {
    res.render("book/new")
};

async function show (req, res) {
    let { id } = req.params 
    let book = await BookModel.findById(id) 
    res.render('book/show', { book }) 
}; 

async function destroy (req, res) {
    let { id } = req.params 
    try {
        let book = await BookModel.findByIdAndRemove(id)
        res.redirect("/books")
    } catch (error) {
        console.log(error)
    }
};


async function edit (req, res) {
    let { id } = req.params 
    let book = await BookModel.findById(id)
    res.render("book/edit", { book }) // ???
};

async function update (req, res) {
    let { id } = req.params
    let { title } = req.body
    let book = await BookModel.findByIdAndUpdate(id, { title })
    res.redirect(`/books/${id}`)
}; 


module.exports = {
    create,
    index,
    make,
    show,
    update,
    edit,
    destroy
  };