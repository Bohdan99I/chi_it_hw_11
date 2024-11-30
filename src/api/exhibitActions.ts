import { IPost } from '../types';
import axiosInstance from './axiosInstance';
import { API_ENDPOINTS } from '../config/api';

export const exhibitActions = {
  getAllPosts: async (page: number = 1, limit: number = 10): Promise<{ posts: IPost[], total: number }> => {
    try {
      const response = await axiosInstance.get(`${API_ENDPOINTS.GET_EXHIBITS}?page=${page}&limit=${limit}`);
      const posts = response.data.data || [];
      const total = response.data.total || posts.length;
      return { posts, total };
    } catch (error) {
      console.error('Error in getAllPosts:', error);
      throw error;
    }
  },

  getMyPosts: async (page: number = 1, limit: number = 10): Promise<{ posts: IPost[], total: number }> => {
    try {
      const response = await axiosInstance.get(`${API_ENDPOINTS.GET_MY_EXHIBITS}?page=${page}&limit=${limit}`);
      const posts = response.data.data || [];
      const total = response.data.total || posts.length;
      return { posts, total };
    } catch (error) {
      console.error('Error in getMyPosts:', error);
      throw error;
    }
  },

  getPostById: async (id: number): Promise<IPost> => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.GET_EXHIBIT(id));
      return response.data;
    } catch (error) {
      console.error('Error in getPostById:', error);
      throw error;
    }
  },

  createPost: async (formData: FormData): Promise<IPost> => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.CREATE_EXHIBIT, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error in createPost:', error);
      throw error;
    }
  },

  updatePost: async (id: number, data: Partial<IPost>): Promise<IPost> => {
    try {
      const response = await axiosInstance.put(API_ENDPOINTS.UPDATE_EXHIBIT(id), data);
      return response.data;
    } catch (error) {
      console.error('Error in updatePost:', error);
      throw error;
    }
  },

  deletePost: async (id: number): Promise<void> => {
    try {
      await axiosInstance.delete(API_ENDPOINTS.DELETE_EXHIBIT(id));
    } catch (error) {
      console.error('Error in deletePost:', error);
      throw error;
    }
  },

  addComment: async (postId: number, content: string) => {
    const response = await axiosInstance.post(API_ENDPOINTS.CREATE_COMMENT(postId), { text: content });
    return response.data;
  },

  getComments: async (postId: number) => {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_COMMENTS(postId));
    return response.data;
  },

  deleteComment: async (postId: number, commentId: number) => {
    await axiosInstance.delete(API_ENDPOINTS.DELETE_COMMENT(postId, commentId));
  },

  updateComment: async (postId: number, commentId: number, content: string) => {
    const response = await axiosInstance.put(API_ENDPOINTS.UPDATE_COMMENT(postId, commentId), { text: content });
    return response.data;
  }
};
