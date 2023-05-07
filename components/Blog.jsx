import Link from "next/link";
import React from "react";

const Blog = ({ blog }) => {
  return (
    <article class="hover:animate-background rounded-xl bg-gradient-to-r from-sky-300 via-blue-500 to-blue-600 p-0.5 shadow-xl transition hover:bg-blue-600 hover:shadow-sm hover:[animation-duration:_4s]">
      <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <p class="block text-xs text-gray-500">{blog.date}</p>

        <Link href={`/blogs/${blog.id}`}>
          <h3 class="mt-0.5 text-lg font-medium text-gray-900">{blog.title}</h3>
        </Link>

        <div class="mt-4 flex flex-wrap gap-1">
          {blog.categories.map((category) => (
            <span
              key={category}
              class="whitespace-nowrap rounded-full bg-sky-100 px-2.5 py-0.5 text-xs text-sky-600">
              {category}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Blog;
