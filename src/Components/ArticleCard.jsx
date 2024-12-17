import React from "react";
import { Link } from "react-router";

const ArticleCard = ({ article }) => {
  return (
    <div className="single-card">
      <h3 className="item-name">{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img className="img-list" src={article.article_img_url} alt={article.title}/>
      <Link to={`/articles/${article.article_id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};

export default ArticleCard;
