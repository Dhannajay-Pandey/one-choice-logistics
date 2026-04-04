"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(form);

    // 🔥 connect API here
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border space-y-4"
    >
      <h3 className="text-lg font-semibold">Send us a message</h3>
      <p className="text-gray-600 text-sm pb-8">
        Fill out the form below for quotes or inquiries.
      </p>
      <lable className="text-sm font-medium">Full Name</lable>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-lg p-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
    <lable className="text-sm font-medium">Email</lable>
      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-lg p-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
    <lable className="text-sm font-medium">Phone</lable>
      <input
        type="text"
        placeholder="Phone"
        className="w-full border rounded-lg p-2"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
    <lable className="text-sm font-medium">Subject</lable>  
      <input
        type="text"
        placeholder="Subject"
        className="w-full border rounded-lg p-2"
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />
    <lable className="text-sm font-medium">Message</lable>
      <textarea
        placeholder="Message"
        className="w-full border rounded-lg p-2"
        rows={4}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
        Send Message
      </button>
    </form>
  );
}