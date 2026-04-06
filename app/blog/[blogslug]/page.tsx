import { blogData } from "@/data/blogData/blogData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogDetailsPage({ params }: any) {
  const blog = blogData.find((b) => b.slug === params.blogslug);
  if (!blog) return notFound();

  const related = blogData.filter((b) => b.slug !== blog.slug && b.category === blog.category).slice(0, 3);

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="relative w-full h-[400px]">
        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition text-sm">
              ← Back to Blog
            </Link>
            <span className="block bg-red-600 text-white text-xs px-3 py-1 rounded-full w-fit mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-slate-300 text-sm">
              <span>📅 {blog.date}</span>
              <span>✍️ {blog.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT - Article */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
              <p className="text-lg text-slate-500 mb-8 leading-relaxed border-l-4 border-red-500 pl-4 italic">
                {blog.description}
              </p>
              <div className="prose prose-slate max-w-none">
                {blog.content.split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-6">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">

            {/* Share Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
                </svg>
                Share this article
              </h3>
              <div className="flex gap-2">
                <button className="h-9 w-9 rounded-full border border-input bg-background shadow-sm flex items-center justify-center hover:text-[#1877F2] hover:border-[#1877F2] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </button>
                <button className="h-9 w-9 rounded-full border border-input bg-background shadow-sm flex items-center justify-center hover:text-[#0A66C2] hover:border-[#0A66C2] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </button>
                <button className="h-9 w-9 rounded-full border border-input bg-background shadow-sm flex items-center justify-center hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4">Need help with your logistics needs?</p>
                <Link href="/contact" className="block w-full bg-slate-900 hover:bg-slate-800 text-white text-center py-2 rounded-md text-sm font-medium transition">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">Related Articles</h4>
                <div className="space-y-4">
                  {related.map((item) => (
                    <Link key={item.id} href={`/blog/${item.slug}`} className="flex gap-3 group">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition duration-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800 group-hover:text-red-600 transition line-clamp-2">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">{item.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

    </main>
  );
}
