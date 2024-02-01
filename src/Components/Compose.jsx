import React, { useState } from 'react';
import './Compose.css';
import Lightmode from './Lightmode';
import { useNavigate } from 'react-router-dom';

const Compose = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const navigate = useNavigate();
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate.push('/blog', { Compose });
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
   <div style={{backgroundColor: "grey", height: "800px"}} >
     <div className="compose-container" style={{marginBottom: "2000px"}}>
      <h2>What's on your mind?👀</h2>
      <form onSubmit={handleClick}>
        {/* Input field for title */}
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} onClick={Compose} />

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
        <button onClick={handleClick} type="submit" style={{fontSize: "20px", fontWeight: "700", backgroundColor: "blueviolet"}}>Submit</button>
        <a href="./blog"><h5>Go to blog</h5></a>
      </form>
    </div>
   </div>
  );
};

export default Compose;