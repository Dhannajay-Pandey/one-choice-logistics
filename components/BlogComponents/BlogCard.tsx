type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition duration-300">
      
      {/* Image */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[200px] object-cover"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-2">📅 {blog.date}</p>

        <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {blog.description}
        </p>

        <button className="text-red-600 text-sm font-medium hover:underline">
          Read Article →
        </button>
      </div>
    </div>
  );
}