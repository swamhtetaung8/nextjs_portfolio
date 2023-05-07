import React from "react";
import { blogs } from "../blogs";

const BlogDetail = ({ params }) => {
  const currentBlog = blogs.find((blog) => blog.id == params.blog);
  return (
    <section>
      <div className=" space-y-3 my-5">
        <h1 className="text-3xl text-gray-900 font-semibold capitalize inline-block">
          {currentBlog.title}
        </h1>
        <p className=" text-gray-500">{currentBlog.date}</p>
      </div>
      <article className=" space-y-5">
        {currentBlog.details.map((detail) => (
          <p className=" leading-8" key={detail}>
            {detail}
          </p>
        ))}
      </article>
      <p className=" text-gray-500 mt-5">Reference - {currentBlog.reference}</p>
    </section>
  );
};

export default BlogDetail;
