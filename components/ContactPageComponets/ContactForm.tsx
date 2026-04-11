"use client";

import { useState } from "react";

type FormLabels = {
  title: string;
  subtitle: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  send: string;
};

export default function ContactForm({ form }: { form: FormLabels }) {
  const [fields, setFields] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border space-y-4">
      <h3 className="text-lg font-semibold">{form.title}</h3>
      <p className="text-gray-600 text-sm pb-8">{form.subtitle}</p>

      <label className="text-sm font-medium">{form.fullName}</label>
      <input
        type="text"
        placeholder={form.fullName}
        className="w-full border rounded-lg p-2"
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
      />

      <label className="text-sm font-medium">{form.email}</label>
      <input
        type="email"
        placeholder={form.email}
        className="w-full border rounded-lg p-2"
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
      />

      <label className="text-sm font-medium">{form.phone}</label>
      <input
        type="text"
        placeholder={form.phone}
        className="w-full border rounded-lg p-2"
        onChange={(e) => setFields({ ...fields, phone: e.target.value })}
      />

      <label className="text-sm font-medium">{form.subject}</label>
      <input
        type="text"
        placeholder={form.subject}
        className="w-full border rounded-lg p-2"
        onChange={(e) => setFields({ ...fields, subject: e.target.value })}
      />

      <label className="text-sm font-medium">{form.message}</label>
      <textarea
        placeholder={form.message}
        className="w-full border rounded-lg p-2"
        rows={4}
        onChange={(e) => setFields({ ...fields, message: e.target.value })}
      />

      <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
        {form.send}
      </button>
    </form>
  );
}
