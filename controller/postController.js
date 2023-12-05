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

export const submitPost = async (req, res) => {
  const { title, content, userId, classId } = req.body;

  try {
    // Checking for null or undefined values

    if (!title || !content || !userId || !classId) {
      throw new Error('Valores inválidos para criar postagem');
    }

    // Adding the new post to the database
    const newPost = await PostModel.createPost(title, content, userId, classId);
    res.redirect(`/posts`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar postagem');
  }
};

// Filtering posts by CourseId
export const showPostsByClassId = async (req, res) => {
  const classId = req.params.classId;

  // getting these posts from database
  try {
    const posts = await PostModel.getPostsByClassId(classId);
    res.render('posts', { posts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter postagens por classId');
  }
};
