import React from "react";
import  { useState } from "react";
import { deleteComment } from "../api"

const CommentCard = ({ comment, onDelete }) => {

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this comment?")) return;

    setIsDeleting(true);

    deleteComment(comment.comment_id)
      .then(() => {
        onDelete(comment.comment_id); 
      })
      .catch((err) => {
        console.error(err);
        setIsDeleting(false);
      });
  };

  let currentUser= "grumpy19"


  return (
    <div>
      <p><strong>{comment.author}</strong> says:</p>
      <p>{comment.body}</p>
      <p>votes: {comment.votes}</p>
      <p>{comment.created_at.slice(0,10)}</p>

      {comment.author === currentUser &&(
        <button onClick={handleDelete} disabled={isDeleting}>
         Delete
        </button>
      )}

    </div>
  );
};



export default CommentCard;

