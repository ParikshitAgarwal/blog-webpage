import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { db } from "../firebase";


const BlogDetails = (props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  useEffect(() => {
    db.collection("blogs")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setBlog(doc.data());
          setIsLoading(true)
        }
      });
  }, [id]);

  const handleDelete = () => {
    db.collection("blogs")
      .doc(id)
      .delete()
      .then(() =>{ alert("Blog succesfully deleted!")
        history.push("/")
    })
      .catch((error) => alert(error.message))
  };
  return (
    <div className="blog-details">
        {!isLoading && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
