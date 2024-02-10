const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const postController = require('../controllers/postController');


router.get('/posts', authMiddleware, postController.getPosts);
router.post('/posts/add', authMiddleware, postController.addPost);
router.put('/posts/update/:id', authMiddleware, postController.updatePost);
router.delete('/posts/delete/:id', authMiddleware, postController.deletePost);

module.exports = router;
