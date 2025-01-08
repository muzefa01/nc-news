import React from "react";
import { Link } from "react-router";

const TopicsCard = ({ topic }) => {
  return (
    <div className="single-card">
      <h3 className="item-name">{topic.slug}</h3>
      <Link to={`/articles/${topic.slug}`}>
        <button>View Aritcles</button>
      </Link>
    </div>
  );
};

export default TopicsCard;
