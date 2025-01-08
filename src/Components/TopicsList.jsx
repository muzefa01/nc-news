import React, { useState, useEffect } from "react";
import axios from "axios";
import TopicsCard from './TopicsCard'

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://my-nc-news-k94s.onrender.com/api/topics")
      .then((response) => {
        setTopics(response.data.topics);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error", err);
        setError("Failed to load topics.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading topics...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="wrapper">
      {topics.map((topic) => (
        <TopicsCard key={topic.slug} topic={topic} />
      ))}
    </div>
  );
};

export default TopicsList;
