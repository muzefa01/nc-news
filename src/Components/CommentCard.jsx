import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div>
      <p><strong>{comment.author}</strong> says:</p>
      <p>{comment.body}</p>
      <p>votes: {comment.votes}</p>
      <p>{comment.created_at.slice(0,10)}</p>
    </div>
  );
};



export default CommentCard;

