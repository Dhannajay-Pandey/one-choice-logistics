"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Question = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ questions }: { questions: Question[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {questions.map((item, i) => (
        <div key={i} className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="font-semibold text-slate-800 pr-4">{item.question}</span>
            <ChevronDown className={`w-5 h-5 text-red-500 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="px-6 pb-5 pt-4 text-slate-600 leading-relaxed border-t border-slate-50">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
