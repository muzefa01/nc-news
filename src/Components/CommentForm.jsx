import React, { useState } from "react";
import { postComment } from "../api";

function CommentForm({ article_id, addComment }) {
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    postComment(article_id, body)
      .then((response) => {
        addComment(response.data.comment); 
        setBody(""); 
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Add a Comment</h3>
      <label htmlFor="body">Comment:</label>
      <textarea
        id="body"
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        Post Comment
      </button>
    </form>
  );
}


export default CommentForm;
