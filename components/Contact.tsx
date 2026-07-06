"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  scope: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  scope: "Full Production & Digital",
  message: "",
};

const PROJECT_SCOPES = [
  "Full Production & Digital",
  "Design & Branding Only",
  "Documentation Services",
  "Digital Solutions Only",
];

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("submitted");
        setFormData(INITIAL_STATE);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="py-stack-lg bg-white" id="contact">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-4xl mx-auto border border-surface-variant p-12 md:p-20">
          <div className="text-center mb-16">
            <h2 className="font-hero text-hero-mobile md:text-hero mb-4">
              Start a Conversation
            </h2>
            <p className="text-on-surface-variant">
              Tell us about your next big project. Let&apos;s create
              something exceptional.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Input Nama */}
            <div className="col-span-1">
              <label htmlFor="name" className="block text-[12px] font-bold uppercase tracking-wider text-on-surface mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full h-12 bg-surface-container-low border border-surface-variant rounded-[8px] px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>

            {/* Input Email */}
            <div className="col-span-1">
              <label htmlFor="email" className="block text-[12px] font-bold uppercase tracking-wider text-on-surface mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full h-12 bg-surface-container-low border border-surface-variant rounded-[8px] px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>

            {/* Select Scope */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="scope" className="block text-[12px] font-bold uppercase tracking-wider text-on-surface mb-2">
                Project Scope
              </label>
              <select
                id="scope"
                name="scope"
                value={formData.scope}
                onChange={handleChange}
                className="w-full h-12 bg-surface-container-low border border-surface-variant rounded-[8px] px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none"
              >
                {PROJECT_SCOPES.map((scope) => (
                  <option key={scope} value={scope}>
                    {scope}
                  </option>
                ))}
              </select>
            </div>

            {/* Textarea Message */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-[12px] font-bold uppercase tracking-wider text-on-surface mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full bg-surface-container-low border border-surface-variant rounded-[8px] p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="col-span-1 md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary text-white font-bold h-14 rounded-full hover:bg-[#0077ED] transition-all transform active:scale-95 shadow-lg shadow-primary/20 disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send Inquiry"}
              </button>
              
              {status === "submitted" && (
                <p className="text-center text-primary text-sm mt-4 font-medium animate-fade-in">
                  Success! Your message has been sent. We&apos;ll be in touch soon.
                </p>
              )}
              
              {status === "error" && (
                <p className="text-center text-red-500 text-sm mt-4 font-medium">
                  Oops! Something went wrong. Please check your connection and try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}