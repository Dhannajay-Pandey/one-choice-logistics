
"use client";


import Image from "next/image";
import { CircleCheck, Star } from "lucide-react";
export default function ServiceDetailsMainLayout({ data }: any) {
    return (
        <section className="bg-slate-100 py-16">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 space-y-10 ">

                    {/* Overview */}
                    <div>
                        <h2 className="text-3xl font-bold border-l-4 border-red-500 pl-3 mb-3 ">
                            Overview
                        </h2>
                        <p className="text-slate-600">
                            {data.overview}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="pt-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-red-600 pl-4">
                            Key Features:
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.features.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-shadow"
                                >
                                    {/* Icon */}
                                    <div className="bg-sky-100 p-2 rounded-lg mt-1 shrink-0">
                                        <Star className="w-5 h-5 text-sky-600" />
                                    </div>

                                    {/* Text */}
                                    <p className="text-slate-700 font-medium leading-relaxed">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="pt-10">
                        <h2 className="text-3xl font-bold border-l-4 border-red-500 pl-3 mb-4">
                            Key Benefits
                        </h2>

                        <div className="grid grid-cols-1 gap-6">
                            {data.benefits.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl transition-all hover:shadow-md"
                                >
                                    {/* Icon */}
                                    <div className="bg-green-100 p-2 rounded-full shrink-0">
                                        <CircleCheck className="w-6 h-6 text-green-600" />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-slate-800 text-lg font-medium">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process */}
                    <div className="pt-10">
                        <h2 className="text-3xl font-bold border-l-4 border-red-500 pl-3 mb-6">
                            Our Process
                        </h2>
                        <Image
                            src="/images/services/processgirl.jpg"
                            alt="Our Process"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-xl shadow-md mb-6"
                        />

                        <div className="relative border-l-2 border-slate-200 pl-8 space-y-12 ml-4">

                            {data.process.map((step, i) => (
                                <div key={i} className="relative group">

                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-0 bg-slate-50 border-2 border-red-600 w-6 h-6 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform z-10">
                                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">

                                        <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">

                                            {/* Step Label */}
                                            <span className="text-xs text-red-600 font-extrabold uppercase tracking-widest bg-red-50 px-2 py-1 rounded">
                                                {step.step}
                                            </span>

                                            {step.title}
                                        </h3>

                                        <p className="text-slate-600 text-lg">
                                            {step.desc}
                                        </p>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">

                    {/* CTA Card */}
                    <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to ship?
                        </h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Contact our team today for a personalized quote tailored to your cargo needs.
                        </p>

                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-4 py-2 w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-bold shadow-lg hover:shadow-red-600/30 transition-all">
                            Get a Quote
                        </button>

                        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-4 h-4"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>  Secure & Reliable Handling
                        </p>
                    </div>

                    {/* Industries */}
                    <div className="bg-white p-6 rounded-2xl border text-lg border-slate-200">
                        <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 w-5 h-5 text-slate-500"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>Industries Served
                        </h4>

                        <ul className="space-y-4 text text-slate-600">
                            <li className="flex items-center gap-3 text-slate-700 hover:text-red-600 transition-colors"> <div class="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></div> Electronics</li>
                            <li className="flex items-center gap-3 text-slate-700 hover:text-red-600 transition-colors"> <div class="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></div> Pharmaceuticals</li>
                            <li className="flex items-center gap-3 text-slate-700 hover:text-red-600 transition-colors"> <div class="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></div> Fashion & Textile</li>
                            <li className="flex items-center gap-3 text-slate-700 hover:text-red-600 transition-colors"> <div class="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></div> Perishable Goods</li>
                            <li className="flex items-center gap-3 text-slate-700 hover:text-red-600 transition-colors"> <div class="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></div> Automotive Parts</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}