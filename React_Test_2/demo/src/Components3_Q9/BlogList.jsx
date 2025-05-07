import React from "react";
import { Link } from "react-router-dom";


const blogs = [
    { id: 1, title: "React Basics", description: "Learn the fundamentals of React.js." },
    { id: 2, title: "Understanding React Router", description: "A guide to React Router and navigation." },
];

const BlogList = () => (
    <div className="container">
        <h1>Blog Posts</h1>
        <ul>
            {blogs.map((blog) => (
                <li key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default BlogList;
