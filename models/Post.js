import { sql } from "../database/db.js";

// Getting all posts from database
export const getAllPosts = async () => {
  try {
    const posts = await sql`
      SELECT posts.*, users.username, users.profileimagedir, TO_CHAR(post_date - INTERVAL '3 hours', 'DD-MM-YYYY HH24:MI') AS new_date
      FROM posts
      JOIN users ON posts.user_id = users.id
      ORDER BY post_date DESC`; // Adiciona a cláusula ORDER BY para ordenar por data decrescente
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter postagens');
  }
};

// Create a new post in the database
export const createPost = async (title, content, userId, classId,) => {
  try {
    const result = await sql`
    INSERT INTO posts (title, content, user_id, class_id) 
    VALUES (${title}, ${content}, ${userId}, ${classId}) 
    RETURNING *;`;

    return result[0];
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao criar postagem');
  }
};

// Getting posts by CourseId
export const getPostsByClassId = async (classId) => {
  try {
    if (classId === undefined) {
      throw new Error('classId não pode ser undefined');
    }

    classId = classId.substring(1);

    const posts = await sql`
      SELECT posts.*, users.username, users.profileimagedir, TO_CHAR(post_date - INTERVAL '3 hours', 'DD-MM-YYYY HH24:MI') AS new_date
      FROM posts
      JOIN users ON posts.user_id = users.id
      WHERE class_id = ${classId}`;

    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter postagens por classId');
  }
};


export const getPostById = async (postId) => {
  try {
    const post = await sql`
      SELECT posts.*, users.username, users.profileimagedir, TO_CHAR(post_date - INTERVAL '3 hours', 'DD-MM-YYYY HH24:MI') AS new_date
      FROM posts
      JOIN users ON posts.user_id = users.id
      WHERE posts.id = ${postId}`;

    return post[0];
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter post por ID');
  }
};

