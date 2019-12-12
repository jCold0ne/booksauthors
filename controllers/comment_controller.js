const BookModel = require("../database/models/book_model")

async function create (req, res) {
    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$")
    let { id } = req.params
    let { body } = req.body
    let book = await BookModel.findById(id)
    book.comments.push({ body })
    await book.save()
    res.redirect(`/books/${id}`)
};

module.exports = {
    create
};
