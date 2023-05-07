import Blog from "@/components/Blog";
import React from "react";
import { blogs } from "./blogs";

const Blogs = () => {
  return (
    <section className=" pt-10">
      <p className="text-4xl text-gray-900 font-bold capitalize border-b-4 mb-10 border-sky-500 inline-block pb-3">
        Blogs
      </p>
      <div>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
