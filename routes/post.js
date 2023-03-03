import express from 'express';
import {
    getFeedPosts,
    getUserPosts,
    editPost,
    likePost,
    deletePost,
} from '../controllers/post.js'

const router = express.Router();

// GET
router.route('/').get(getFeedPosts);
router.route('/:userId').get(getUserPosts);

// PATCH
router.route('/update/:postId').patch(editPost);
router.route('/like/:postId').patch(likePost)

// DELETE   
router.route('/delete/:postId').delete(deletePost);

export default router;