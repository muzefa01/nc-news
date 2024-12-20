import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { fetchCommentsByArticleId } from "../api";
import CommentForm from "./CommentForm";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response.data.comments);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load comments.");
        setLoading(false);
      });
  }, [article_id]);

  const addComment = (newComment) => {
    setComments((currentComments) => [newComment, ...currentComments]);
  };

  const handleDeleteComment = (comment_id) => {
    setComments((currentComments) =>
      currentComments.filter((comment) => comment.comment_id !== comment_id)
    );
  }

  return (
    
     <div>
     <h3>Comments</h3>
     <CommentForm article_id={article_id} addComment={addComment} />
       {comments.map((comment) => (
         <CommentCard key={comment.comment_id} comment={comment} onDelete={handleDeleteComment}/>
       ))}
     </div>
    
  );
};

export default Comments;
