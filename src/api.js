import axios from "axios";


const api = axios.create({
  baseURL: "https://my-nc-news-k94s.onrender.com/api", 
});


export const fetchArticles = () => {
  return api.get("/articles");
};

export const fetchArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`);
};

export const fetchCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`);
};

export const voteOnArticle = (article_id, voteChange) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: voteChange });
};

export const postComment = (article_id, body) => {
  return api.post(`/articles/${article_id}/comments`, {
    username: "grumpy19", 
    body,
  });
};