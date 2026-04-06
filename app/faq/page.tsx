"use client";

import { useState } from "react";
import { faqData } from "@/data/faqData";
import { ChevronDown, CircleHelp, Search } from "lucide-react";
import Link from "next/link";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  return (
    <main className="flex-grow">
      <div className="bg-slate-50 min-h-screen">

        {/* BANNER */}
        <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/images/faq/faq-banner.jpg')" }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <CircleHelp className="w-16 h-16 text-sky-500 mx-auto mb-6 opacity-80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Hub</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Everything you need to know about shipping with One Choice Logistics. Can't find what you're looking for? Contact our team.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-14 pl-12 pr-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:bg-white/20 focus:ring-1 focus:ring-sky-500 text-sm"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 mb-12">

            {/* FAQ Sections */}
            <div className="space-y-10">
              {faqData.map((section, si) => {
                const matchedQuestions = search
                  ? section.questions.filter(
                      (q) =>
                        q.question.toLowerCase().includes(search.toLowerCase()) ||
                        q.answer.toLowerCase().includes(search.toLowerCase())
                    )
                  : section.questions;

                if (matchedQuestions.length === 0) return null;

                return (
                  <div key={si}>
                    {section.category && (
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-6 bg-red-600 rounded-full" />
                        <h2 className="text-xl font-bold text-slate-900">{section.category}</h2>
                      </div>
                    )}
                    <div className="space-y-4">
                      {matchedQuestions.map((item, qi) => (
                        <AccordionItem
                          key={qi}
                          id={`${si}-${qi}`}
                          question={item.question}
                          answer={item.answer}
                          openIndex={openIndex}
                          setOpenIndex={setOpenIndex}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            

          </div>
          {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">Can't find the answer?</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-9 text-sm font-medium transition"
              >
                Contact Us
              </Link>
            </div>
        </div>

      </div>
    </main>
  );
}

function AccordionItem({
  id, question, answer, openIndex, setOpenIndex,
}: {
  id: string;
  question: string;
  answer: string;
  openIndex: string | null;
  setOpenIndex: (id: string | null) => void;
}) {
  const isOpen = openIndex === id;
  return (
    <div className={`border rounded-xl px-4 transition-all ${isOpen ? "border-red-100 bg-red-50/30" : "border-slate-100"}`}>
      <button
        onClick={() => setOpenIndex(isOpen ? null : id)}
        className="flex flex-1 w-full items-center justify-between py-4 text-lg font-semibold text-slate-900 hover:text-red-600 text-left transition-all"
      >
        {question}
        <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
        <p className="text-slate-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
