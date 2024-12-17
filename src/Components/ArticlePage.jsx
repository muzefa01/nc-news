import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ArticlePage = () => {
  const { article_id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    axios
      .get(`https://my-nc-news-k94s.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load article");
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img
        src={article.article_img_url}
        alt={article.title}
      />
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
    </div>
  );
};

export default ArticlePage;
