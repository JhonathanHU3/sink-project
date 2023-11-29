import { sql } from "../database/db.js";

export const getAllPosts = async () => {
  try {
    const posts = await sql`SELECT * FROM posts`;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter postagens');
  }
};

export const createPost = async (title, content, userId) => {
  try {
    const result = await sql`INSERT INTO posts (title, content, userId) VALUES (${title}, ${content}, ${userId}) RETURNING *`;
    return result[0];
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao criar postagem');
  }
};
