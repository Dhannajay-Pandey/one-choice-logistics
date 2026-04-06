import Link from "next/link";

type Blog = {
  slug: string;
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition duration-300">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[200px] object-cover transition duration-500 hover:scale-110"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-2">📅 {blog.date}</p>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
          {blog.description}
        </p>

        <Link href={`/blog/${blog.slug}`} className="inline-flex items-center text-red-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Read Article →
        </Link>
      </div>
    </div>
    </Link>
  );
}