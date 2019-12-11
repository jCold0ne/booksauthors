const express = require("express"); 
const router = express.Router();
const BookController = require('../controllers/book_controller');


router.get('/', BookController.index)

router.post('/', BookController.create)

router.get('/new', BookController.make)

router.get('/:id', BookController.show)

router.get('/:id/edit', BookController.edit)

router.patch('/:id', BookController.update)

router.put('/:id', BookController.update)

router.delete('/:id', BookController.destroy)

module.exports = router