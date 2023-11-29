import * as PostModel from "../models/Post.js";

// Controller display all posts
export const showAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.getAllPosts();
    res.render('posts', { posts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter postagens');
  }
};

// Controller for creating a new post
export const submitPost = async (req, res) => {
  const { title, content, userId } = req.body;

  try {
    const newPost = await PostModel.createPost(title, content, userId);
    res.redirect(`/posts`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar postagem');
  }
};
