import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {pending && <div>Loading...</div>}
      {blogs && <BlogsList blogs={blogs} title="all blogs" />}
    </div>
  );
};

export default Home;
