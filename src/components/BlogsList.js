import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const fetchBlogs = async () => {
    db.collection("blogs")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(data);
        setIsLoading(true)
      });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

 
  return (
    <div className="blog-list">
      <h2>BLogs</h2>
      {!isLoading && <div style={{textAlign:"center",marginTop:100,fontSize:20}}>Loading...</div>}
      {blogs &&
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogsList;
