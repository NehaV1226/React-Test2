import React from "react";
import { useParams } from "react-router-dom";

const blogData = {
    1: { title: "React Basics", content: "React is a JavaScript library for building UI." },
    2: { title: "Understanding React Router", content: "React Router helps in navigation between components." },
};

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData[id];

    return (
        <div className="container">
            {blog ? (
                <>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                </>
            ) : (
                <h2>Blog Not Found</h2>
            )}
        </div>
    );
};

export default BlogDetail;
