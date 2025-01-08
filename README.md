**NC News - Frontend Application**
NC News is a fully functional React application that allows users to view and interact with articles, comments, and topics. The application demonstrates dynamic routing, API integration, and reusable components. Users can view articles, filter them by topics, and post/delete comments under specific articles.


**Features**

1. Dynamic Topics and Articles:
View a list of available topics.
Navigate to a specific topic to see articles related to that topic.

2. Article Interaction:
View a list of articles on the homepage.
Upvote or downvote articles.

3. Commenting System:
Post a comment under an article.
Delete a comment (only if posted by the current user)

4. Responsive Design:
Application adapts to different screen sizes with a clean and intuitive layout.

5. Dynamic Routing:
Uses React Router for navigating between pages.


**Technologies Used**
Frontend:
React
Axios
React Router

Styling:
CSS

Backend:
Node.js
Express
PostgreSQL (via Supabase)


**Setup Instructions**
Prerequisites
Node.js installed on your system.
A working backend API (ensure the backend is hosted or running locally).

**Installation**
1. Clone the repository:
git clone https://github.com/your-username/nc-news-frontend.git


2. Install dependencies:
npm install

**API Endpoints**
The application interacts with the backend via the following endpoints:

**Articles**
GET /api/articles: Fetch all articles.
GET /api/articles/:article_id: Fetch a specific article by ID.
PATCH /api/articles/:article_id: Increment or decrement votes for an article.

**Topics**
GET /api/topics: Fetch all topics.

**Comments**
GET /api/articles/:article_id/comments: Fetch all comments for a specific article.
POST /api/articles/:article_id/comments: Add a new comment to an article.
DELETE /api/comments/:comment_id: Delete a comment by ID.



**Author**
Developed Syed Abbas. Feel free to reach out with any questions or feedback!

