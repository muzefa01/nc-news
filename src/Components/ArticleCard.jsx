import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="single-card">
      <h3 className="item-name">{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <img className="img-list" src={article.article_img_url}/>
    </div>
  );
};

export default ArticleCard;
