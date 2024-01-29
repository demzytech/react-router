import React, { useState } from 'react';
import './Compose.css';

const Compose = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you generate a unique ID for each blog post
    const newBlog = {
      id: Date.now(), // Use a proper unique ID generation method
      title,
      content,
      image,
      likes: 0, // Initialize likes count
      comments: [], // Initialize comments array
      createdAt: new Date(), // Store creation timestamp
    };

    // Add logic to handle the submission of the new blog post
    console.log('New Blog:', newBlog);

    // Call the function to add the new blog to the Blog component state
    addBlog(newBlog);

    // Clear the form after submission
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <div className="compose-container">
      <h2>Compose a New Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for title */}
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        {/* Input field for content */}
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />

        {/* New input for image upload */}
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {/* Display the selected image */}
        {image && (
          <div className="image-preview">
            <img src={URL.createObjectURL(image)} alt="Selected" />
          </div>
        )}

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Compose;