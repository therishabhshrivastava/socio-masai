import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Page.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Fetch posts error:', error.response.data);
        // Handle error, show error message
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="page">
      <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Device: {post.device}</p>
            {/* Add update and delete functionality */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
