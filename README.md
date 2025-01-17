# NC News - Frontend Application

NC News is a fully functional React application that allows users to view and interact with articles, comments, and topics. The application demonstrates dynamic routing, API integration, and reusable components. Users can view articles, filter them by topics, and post/delete comments under specific articles.

## Features

### Dynamic Topics and Articles
- View a list of available topics.
- Navigate to a specific topic to see articles related to that topic.

### Article Interaction
- View a list of articles on the homepage.
- Upvote or downvote articles.

### Commenting System
- Post a comment under an article.
- Delete a comment (only if posted by the current user).

### Responsive Design
- Adapts to different screen sizes with a clean and intuitive layout.

### Dynamic Routing
- Uses React Router for navigating between pages.

## Technologies Used

### Frontend
- React
- Axios
- React Router

### Styling
- CSS

### Backend
- Node.js
- Express
- PostgreSQL (via Supabase)

For backend details, please refer to the [NC News Backend Repository](https://github.com/muzefa01/my-nc-news).

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- A working backend API (ensure the backend is hosted or running locally).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nc-news-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nc-news-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the API URL in the application. Update the base URL in the Axios instance to point to your backend (hosted or local).
5. Start the application:
   ```bash
   npm start
   ```
6. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

The application interacts with the backend via the following endpoints:

### Articles
- `GET /api/articles`: Fetch all articles.
- `GET /api/articles/:article_id`: Fetch a specific article by ID.
- `PATCH /api/articles/:article_id`: Increment or decrement votes for an article.

### Topics
- `GET /api/topics`: Fetch all topics.

### Comments
- `GET /api/articles/:article_id/comments`: Fetch all comments for a specific article.
- `POST /api/articles/:article_id/comments`: Add a new comment to an article.
- `DELETE /api/comments/:comment_id`: Delete a comment by ID.

## Hosted Application

- **Frontend:** [NC News Frontend Hosted Application](https://your-frontend-hosted-link.com)
- **Backend:** [NC News Backend Hosted Application](https://my-nc-news-k94s.onrender.com)

Ensure the backend is running and accessible for the frontend to function correctly.

## Author

Developed by **Syed Abbas**.

Feel free to reach out with any questions or feedback!

## Additional Notes

For the backend setup and API details, refer to the [Backend README](https://github.com/your-username/nc-news-backend/blob/main/README.md). Both repositories work in tandem to provide a seamless experience.
