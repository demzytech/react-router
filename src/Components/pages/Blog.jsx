// Blog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ onPost }) => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim() !== '') {
      onPost(postText);
      setPostText('');
    }
  };

  return (
    <div>
      <h2>Blog</h2>
      <textarea
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="Write your blog post..."
      />
      <br />
      <button onClick={handlePost}>Post</button>
      <br />
      <Link to="/post">Go to Post</Link>
    </div>
  );
};

export default Blog;
