"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import { blogData } from "@/data/blogData/blogData";

export default function BlogSection() {
  const [active, setActive] = useState("All Posts");
  const [search, setSearch] = useState("");

  const categories = [
    "All Posts",
    "Industry Insights",
    "Company News",
    "Case Studies",
  ];

  const filteredBlogs = blogData.filter((blog) => {
    const matchCategory =
      active === "All Posts" || blog.category === active;

    const matchSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-[-300pz] pt-3 pb-12">
      
      {/* Top Bar */}
      <div className="relative z-20 -mt-12">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                  active === cat
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full md:w-[280px]">
            <input
              type="text"
              placeholder="Search articles..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 pt-[34px] items-stretch">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}