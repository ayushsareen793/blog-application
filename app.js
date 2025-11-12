import React, { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill out both title and content!");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    setPosts([newPost, ...posts]); // add new post to the top
    setTitle("");
    setContent("");
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My Blog</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>

      <div className="posts-container">
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet. Add one above!</p>
        ) : (
          posts.map((post) => (
            <div className="post-card" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <button className="delete-btn" onClick={() => deletePost(post.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

