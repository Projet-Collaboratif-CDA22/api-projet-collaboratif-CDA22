const express = require('express');
const { getOnePost, getAllPosts, createPost, updatePost, deletePost } = require('../controller/postController');
const router = express.Router();
const sPost = require('../models/postModel');


router.get('/', getAllPosts);

router.post('/', createPost);
router.get('/:id', getOnePost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;