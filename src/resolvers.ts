import { Repository } from './repository.js';

const repository = new Repository();

export default {
  Query: {
    getHealthCheck: () => {
      try {
        return {
          status: true
        };
      } catch (error) {
        console.error('Error in health check:', error);
      }
    },
    getPostsByUserId: async (_, { userId }) => {
      try {
        return await repository.getPostsByUserId(userId);
      } catch (error) {
        console.error('Error get post by user id:', error);
      }
    },
  },
  Mutation: {
    createUser: async (_, { email, password, name }) => {
      try {
        return await repository.createUser(email, password, name);
      } catch (error) {
        console.error('Error create user:', error);
      }
    },
    createPost: async (_, { title, content, authorId }) => {
      try {
        return await repository.createPost(title, content, authorId);
      } catch (error) {
        console.error('Error create post:', error);
      }
    },
    createComment: async (_, { content, postId }) => {
      try {
        return await repository.createComment(content, postId);
      } catch (error) {
        console.error('Error create comment:', error);
      }
    },
  }
};