const express = require("express"); 
const router = express.Router();
const CommentController = require('../controllers/comment_controller');

router.post("/:id", CommentController.create)

module.exports = router