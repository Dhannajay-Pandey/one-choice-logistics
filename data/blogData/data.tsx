"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogComponents/BlogCard";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [active, setActive] = useState("All Posts");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/blogs") // your API
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const filteredBlogs = blogs.filter((blog: any) => {
    const matchCategory =
      active === "All Posts" || blog.category === active;

    const matchSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {filteredBlogs.map((blog: any) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}