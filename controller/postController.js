import * as PostModel from "../models/Post.js";

// Controller display all posts
export const showAllPosts = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const courseId = req.params.courseId; 
    console.log(courseId)
    const posts = await PostModel.getPostsByClassIdPaginated(courseId, page, pageSize);
    const totalPosts = await PostModel.getTotalPostsByClassId(courseId);
    const totalPages = Math.ceil(totalPosts / pageSize);

    const topGames = await PostModel.getTopGames();

    res.render('forum', { posts, totalPages, currentPage: parseInt(page), courseId, topGames });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter postagens por Course ID');
  }
};

export const submitPost = async (req, res) => {
  const { title, content, userId, courseId } = req.body;

  try {
    // Checking for null or undefined values

    if (!title || !content || !userId || !courseId) {
      throw new Error('Valores inválidos para criar postagem');
    }

    // Adding the new post to the database
    const newPost = await PostModel.createPost(title, content, userId, courseId);
    res.redirect(`/forum`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar postagem');
  }
};

// Filtering posts by CourseId
export const showPostsByClassId = async (req, res) => {
  try {
    // ...

    const posts = await PostModel.getPostsByCourseIdPaginated(courseId, page, pageSize);
    const totalPosts = await PostModel.getTotalPostsByClassId(classId);
    const totalPages = Math.ceil(totalPosts / pageSize);

    const topGames = await PostModel.getTopGames();

    res.render('forum', { posts, totalPages, currentPage: parseInt(page), classId, topGames });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter postagens por Class ID');
  }
};
