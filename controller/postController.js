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
  const { title, content, userId, classId } = req.body;

  try {
    // Adicione verificações para evitar valores undefined ou null
    if (!title || !content || !userId || !classId) {
      throw new Error('Valores inválidos para criar postagem');
    }

    const newPost = await PostModel.createPost(title, content, userId, classId);
    res.redirect(`/posts`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar postagem');
  }
};

export const showPostsByClassId = async (req, res) => {
  const classId = req.params.classId;

  try {
    const posts = await PostModel.getPostsByClassId(classId);
    res.render('posts', { posts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter postagens por classId');
  }
};
