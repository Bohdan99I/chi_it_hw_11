import React, { useState, useEffect, useCallback } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Comment } from '../Comment/Comment';
import { exhibitActions } from '../../api/exhibitActions';
import { IComment } from '../../types';

interface CommentSectionProps {
  postId: number;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    try {
      const response = await exhibitActions.getComments(postId);
      setComments(response);
    } catch (error) {
      console.error('Failed to fetch comments:', error);
      setError('Failed to load comments');
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setLoading(true);
    setError(null);

    try {
      await exhibitActions.addComment(postId, newComment);
      setNewComment('');
      fetchComments();
    } catch (error) {
      console.error('Failed to add comment:', error);
      setError('Failed to add comment');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      await exhibitActions.deleteComment(postId, commentId);
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (error) {
      console.error('Failed to delete comment:', error);
      setError('Failed to delete comment');
    }
  };

  const handleEditComment = async (commentId: number, content: string) => {
    try {
      const commentToUpdate = comments.find(comment => comment.id === commentId);
      if (!commentToUpdate) return;

      await exhibitActions.deleteComment(postId, commentId);
      await exhibitActions.addComment(postId, content);
      await fetchComments(); // Оновлюємо список коментарів після змін
    } catch (error) {
      console.error('Failed to update comment:', error);
      setError('Failed to update comment');
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>

      <form onSubmit={handleAddComment}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            disabled={loading}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading || !newComment.trim()}
          >
            Post
          </Button>
        </Box>
      </form>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={() => handleDeleteComment(comment.id)}
          onEdit={(content) => handleEditComment(comment.id, content)}
        />
      ))}
    </Box>
  );
};
