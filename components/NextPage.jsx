import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const NextPage = ({ message, href }) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <p>{message}</p>
      <Link
        href={`/${href}`}
        className="group bg-gradient-to-r from-sky-500 text-white to-blue-500 py-3 px-4 md:px-8  rounded-md flex items-center gap-2 capitalize">
        {href}
        <span className=" group-hover:translate-x-1 transition-all duration-200">
          <BsChevronRight size={18} />
        </span>
      </Link>
    </div>
  );
};

export default NextPage;
