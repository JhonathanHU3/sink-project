import { sql } from "../database/db.js";

// Getting all posts from database
export const getAllPosts = async () => {
  try {
    const posts = await sql`SELECT * FROM posts`;
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
    INSERT INTO posts (title, content, userid, classid) 
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
    const posts = await sql`SELECT * FROM posts WHERE classid = ${classId}`;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter postagens por classId');
  }
};

export const getPostById = async (postId) => {
  try {
    const post = await sql`SELECT * FROM posts WHERE id = ${postId}`;
    return post[0]; // Assumindo que há apenas um post com esse ID
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter post por ID');
  }
};

