const Post = require('../models/Post'); 

exports.getPosts = async (req, res) => {
  try {
    const userId = req.user.userId; 

    if (!userId) {
      return res.status(401).json({ error: 'User ID not found' });
    }

    const userPosts = await Post.find({ user: userId }); 

    res.status(200).json({ posts: userPosts });
  } catch (error) {
    console.error('Error getting posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.addPost = async (req, res) => {
  try {
    const { title, body, device } = req.body;
    const userId = req.user.userId; 

    const post = new Post({ title, body, device, user: userId });

    await post.save();

    res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, device } = req.body;

    let post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to update this post' });
    }

    post.title = title;
    post.body = body;
    post.device = device;

    await post.save();

    res.json({ message: 'Post updated successfully', post });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ message: 'Server error' });
  }
};




exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    
    let post = await Post.findById(id);

    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    
    if (post.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    
    const result = await Post.deleteOne({ _id: id });

    
    if (result.deletedCount === 1) {
      console.log('Post deleted successfully:', post);
      return res.json({ message: 'Post deleted successfully' });
    } else {
      console.error('Error deleting post:', post);
      throw new Error('Failed to delete post');
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
