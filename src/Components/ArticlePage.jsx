import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchArticleById } from "../api";
import Comments from "./Comments";
import Votes from "./Votes";

const ArticlePage = () => {
  const { article_id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    fetchArticleById(article_id)
      .then((response) => {
        setArticle(response.data.article);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load article.");
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img
        src={article.article_img_url}
        alt={article.title}
      />
      <p>{article.body}</p>
    </div>
    <div>
     <Votes article_id={article_id} initialVotes={article.votes} />
     </div>
    <div>
      <Comments article_id={article_id} />
     </div>
     
  </>
  );
};

export default ArticlePage;
